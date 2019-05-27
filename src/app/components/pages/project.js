/* eslint-disable jsx-a11y/anchor-is-invalid */
import React, { Component } from 'react';
import Sidebar from '../layouts/sidebar';
import Header from '../layouts/header';
import Decider from '../layouts/decider';
import _ from 'underscore';
import swal from 'sweetalert2';
import validate from 'validate.js';

import Data from '../../services/data';

import { SkeletonLineShort, QuestionLayout } from '../layouts/loader';

const getTag = (parentTag, { questionnaire }) => {
  let parent = null;
  questionnaire.pages.map(page => {
    page.groups.map(group => {
      group.questions.map(question => {
        if (question.tag === parentTag) return (parent = question);

        if (!question.options) return undefined;

        return question.options.map(option => {
          // console.log(question.tag + "_" + option.label, parentTag)
          if (question.type === 'multiSelect') {
            if (question.tag + '_option_' + option.label.replace(/\s/g, '_') === parentTag) {
              return (parent = question);
            }

            return undefined;
          }

          if (question.tag + '_' + option.label === parentTag) {
            return (parent = question);
          }
        });
      });
    });
  });

  return parent;
};

const ShouldShow = (conditional, { getValue, questionnaire }) => {
  // do a getTag on the conditionals parent to see if it has a parent property,
  // if it does, keep show false and check that parent too...if that says yes then we set show as true and return it
  // and then do a shouldShow,
  console.log({ conditional });
  let show = false;
  show = getValue(conditional.parent) === conditional.parentValue;
  if (!show) return show;

  const ourQuestion = getTag(conditional.parent, { questionnaire });

  if (ourQuestion && ourQuestion.conditional) {
    const otherShouldShow = ShouldShow(ourQuestion.conditional, { getValue });
    return otherShouldShow;
  }

  return show;
};

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mission: {
        pages: [],
      },
      showModal: false,
      loading: true,
    };
  }
  handleHideModal() {
    this.setState({ showModal: false });
  }
  handleShowModal() {
    this.setState({ showModal: true });
  }
  async submitForm({ mission }) {
    //Check validations before submit
    //console.log({ mission: this.state.mission });
    const { answers } = this.state.mission;
    const { validations } = this.state;
    // swal to ask if you are sure you want
    const invalid = validate(answers, validations);

    this.setState({ invalid });

    if (!invalid) {
      swal
        .fire({
          title: 'Are you sure?',
          text:
            'This submition might trigger some events that you might not be able to reverse, ie emails and approval/verification requests',
          type: 'warning',
          showCancelButton: !0,
          confirmButtonText: 'Yes, Submit it!',
        })
        .then(async function(t) {
          if (t.value) {
            await Data.submitToServer({ mission });
            window.location.reload(true);
            swal.fire('Submitted!', 'Your Data has successfully been submitted.', 'success');
          }
        });
    } else {
      this.setState({ invalid });

      const key = Object.keys(invalid)[0];
      const el = document.getElementById(key);

      console.log({ key, el });
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
  async componentDidMount() {
    var data = await Data.getMission(this.props.match.params.id);

    let validations = {};
    data.pages.forEach(page => {
      page.groups.forEach(group => {
        group.questions.forEach(
          q => (validations = { ...validations, [q.tag]: JSON.parse(q.validation) }),
        );
      });
    });

    this.setState({ mission: data, validations, loading: false });
  }
  async componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ loading: true });
      var data = await Data.getMission(this.props.match.params.id);

      let validations = {};
      data.pages.forEach(page => {
        page.groups.forEach(group => {
          group.questions.forEach(
            q => (validations = { ...validations, [q.tag]: JSON.parse(q.validation) }),
          );
        });
      });

      Data.setAnswer({
        mission: data.id,
        tag: 'startedAt',
        value: new Date().toISOString(),
      });

      this.setState({ mission: data, validations, loading: false });
    }
  }

  validateOnBlur = ({ tag }) => {
    const answer = Data.getAnswer({ mission: this.state.mission.id, tag });
    const { validations } = this.state;

    const obj = { [tag]: answer };

    console.log({ obj, validator: validations[tag] });

    const isValid = validate({ [tag]: answer }, { [tag]: validations[tag] });

    this.setState(prevState => ({
      ...prevState,
      invalid: {
        ...prevState.invalid,
        [tag]: isValid,
      },
    }));

    return isValid;
  };
  render() {
    const _this = this;
    const { invalid, loading } = this.state;

    return (
      <div className="k-grid k-grid--hor k-grid--root">
        <div className="k-grid__item k-grid__item--fluid k-grid k-grid--ver k-page">
          <button id="k_aside_close_btn" className="k-aside-close">
            <i className="la la-close" />
          </button>
          <Sidebar loading={loading} />
          <div className="k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper">
            <Header />
            <div className="k-content k-grid__item k-grid__item--fluid k-grid k-grid--hor">
              <div className="row">
                <div className="col-12 col-lg-8 col-md-10 col-sm-12">
                  <div className="k-portlet">
                    {loading ? null : (
                      <div className="k-portlet__head">
                        <div className="k-portlet__head-label">
                          <h3 className="k-portlet__head-title">{this.state.mission.name}</h3>
                        </div>
                      </div>
                    )}
                    <div className="k-portlet__body">
                      <div className="k-portlet__content">
                        {loading ? (
                          <QuestionLayout />
                        ) : (
                          this.state.mission.pages.map(page => {
                            return _.sortBy(page.groups, 'name').map(group => {
                              let questionsOrdered = [];

                              if (this.state.mission.order) {
                                group.questions.map(
                                  q =>
                                    (questionsOrdered[this.state.mission.order.indexOf(q.id)] = q),
                                );
                              } else {
                                questionsOrdered = _.sortBy(group.questions, 'position');
                              }

                              // // filter to spread to get more natural positions and remove empty spaces
                              const questionsCleaned = [...questionsOrdered.filter(q => q)];

                              return questionsCleaned.map(question => {
                                if (question.conditional) {
                                  // console.log(question,ShouldShow(question.conditional))
                                  if (
                                    !ShouldShow(question.conditional, {
                                      getValue: parentTag => {
                                        return Data.getAnswer({
                                          mission: this.state.mission.id,
                                          tag: parentTag,
                                        });
                                      },
                                      questionnaire: this.state.mission,
                                    })
                                  ) {
                                    // since we are not supposed to show this tag, we be nice and remove its unswer from the storage
                                    //  so clean the slate for the children
                                    return null;
                                  }
                                }

                                return (
                                  <span key={question.id}>
                                    <Decider
                                      invalid={invalid && invalid[question.tag]}
                                      validateOnBlur={this.validateOnBlur}
                                      question={{ question }}
                                      getAnswer={({ tag }) => {
                                        return Data.getAnswer({
                                          mission: _this.state.mission.id,
                                          tag,
                                        });
                                      }}
                                      setAnswer={({ tag, value }) => {
                                        Data.setAnswer({
                                          mission: this.state.mission.id,
                                          tag,
                                          value,
                                        });

                                        if (this.state[_this.state.mission.id]) {
                                          this.setState({
                                            [this.state.mission.id]: {
                                              ...this.state[_this.state.mission.id],
                                              [tag]: value,
                                            },
                                          });
                                        } else {
                                          this.setState({
                                            [this.state.mission.id]: { tag, value },
                                          });
                                        }
                                      }}
                                    />
                                    <br />
                                  </span>
                                );
                              });
                            });
                          })
                        )}
                      </div>
                    </div>
                    {loading ? null : (
                      <div className="k-portlet__foot">
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              type="button"
                              className="btn btn-sm btn-brand float-right"
                              onClick={() => {
                                this.submitForm({ mission: this.state.mission.id });
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
