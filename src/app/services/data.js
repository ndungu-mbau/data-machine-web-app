import { graphQuery, requestBackend } from '../requestToolbox';
import moment from 'moment';
import 'moment-timezone';

function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

var Data = (function() {
  var instance;
  var missions;
  var missionsMap = {};
  var missionsQuestionnaireMap = {};

  function createInstance() {
    var object = new Object('I am the instance');
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    getMissions: async function() {
      if (!missions) {
        console.log('fetching missions');
        var { data: response } = await graphQuery(`
          {
            user {
              teams {
                id
                name
                projects {
                  id
                  name
                  teams {
                    id
                    name
                  }
                  questionnaire {
                    id
                    name
                    order
                    pages {
                      id
                      name
                      groups {
                        id
                        name
                        questions {
                          id
                          type
                          contentType
                          placeholder
                          tag
                          position
                          validation
                          conditional {
                            parent
                            parentValue
                          }
                          options {
                            label
                            value
                          }
                          sentences {
                            sentenceLabel
                            sentenceValue
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }`);

        const projects = [];
        response.data.user.teams.map(t => projects.push(...t.projects));
        missions = projects;

        missions.map(mission => {
          mission.questionnaire.answers = {};
          missionsMap[mission.questionnaire.id] = mission.questionnaire;

          missionsQuestionnaireMap[mission.questionnaire.id] = mission.id;
        });

        return missions;
      } else {
        return missions;
      }
    },
    getMission: async function(id) {
      // fetch from api
      if (!missionsMap[id]) {
        var {
          data: {
            data: { questionnaire },
          },
        } = await graphQuery(
          `
        query ($id: String!) {
            questionnaire(id: $id) {
              id
              name
              order,
              pages {
                id
                name
                groups {
                  id
                  name
                  questions {
                    id
                    type
                    contentType
                    placeholder
                    tag
                    position
                    validation
                    conditional {
                      parent
                      parentValue
                      parentValues
                    }
                    options {
                      label
                      value
                    }
                    sentences {
                      sentenceLabel
                      sentenceValue
                    }
                  }
                }
              }
            }
          }`,
          JSON.stringify({
            id,
          }),
        );

        questionnaire.answers = {};
        missionsMap[questionnaire.id] = questionnaire;

        return questionnaire;
      } else {
        return missionsMap[id];
      }
    },
    setAnswer: async function({ mission, tag, value }) {
      missionsMap[mission].answers[tag] = value;
      console.log('setting value', {
        tag,
        value,
        found: missionsMap[mission].answers[tag],
      });
    },
    getAnswer: function({ mission, tag }) {
      console.log('fetching value', {
        tag,
        options: missionsMap[mission].answers,
        found: missionsMap[mission].answers[tag],
      });
      return missionsMap[mission].answers[tag];
    },
    async submitToServer({ mission }) {
      // attatch user data and questionnaire data

      const userData = JSON.parse(localStorage.getItem('user'));

      const { _id, firstName, phoneNumber, email, client } = userData;

      var completionId = randomString(
        6,
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      );

      console.log(missionsMap[mission]);
      Object.assign(missionsMap[mission].answers, {
        projectId: missionsQuestionnaireMap[mission],
        client,
        questionnaireId: missionsMap[mission].id,
        completedAt: new Date().toISOString(),
        userId: _id,
        __agentFirstName: firstName,
        __agentPhoneNumber: phoneNumber,
        __agentEmail: email,
        __timezone: moment.tz.guess(),
        completionId,
      });

      return requestBackend(missionsMap[mission].answers, '/submision');
    },
  };
})();

// use
// get instance of Data
// then
// Data.getMissions()

export default Data;
