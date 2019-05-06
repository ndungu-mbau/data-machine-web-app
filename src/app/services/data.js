import { graphQuery } from '../requestToolbox';

var Data = (function() {
  var instance;
  var missions;
  var missionsMap = {};

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
        var { data: response } = await graphQuery(`{
            user {
              client {
                teams {
                  id
                  name
                }
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
          }
          `);

        missions = response.data.user.client.projects;

        missions.map(mission => {
          missionsMap[mission.id] = mission;
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

        missionsMap[questionnaire.id] = questionnaire;

        return questionnaire;
      } else {
        return missionsMap[id];
      }
    },
  };
})();

// use
// get instance of Data
// then
// Data.getMissions()

export default Data;
