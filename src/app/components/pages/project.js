/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Sidebar from '../layouts/sidebar';
import Header from '../layouts/header';

import DOMPurify from 'dompurify';

import Data from '../../services/data';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mission: {
        pages: [],
      },
    };
  }
  async componentDidMount() {
    var data = await Data.getMission(this.props.match.params.id);

    this.setState({ mission: data });
  }
  async componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log('Route change!');
      var data = await Data.getMission(this.props.match.params.id);

      this.setState({ mission: data });
    }
  }
  render() {
    return (
      <div className="k-grid k-grid--hor k-grid--root">
        <div className="k-grid__item k-grid__item--fluid k-grid k-grid--ver k-page">
          <button id="k_aside_close_btn" className="k-aside-close">
            <i className="la la-close" />
          </button>
          <Sidebar />
          <div className="k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper">
            <Header />
            <div className="k-content k-grid__item k-grid__item--fluid k-grid k-grid--hor">
              <div className="k-content__head k-grid__item">
                <div
                  data-intro="This section contains simple statistics of the company"
                  data-position="right"
                  data-step={6}
                  className="k-content__head-main"
                >
                  <h3 className="k-content__head-title">{this.state.mission.name}</h3>
                </div>
              </div>
            </div>
            <div className="k-content k-grid__item k-grid__item--fluid k-grid k-grid--hor">
              <div className="k-content__body k-grid__item k-grid__item--fluid">
                {/* body content here */}

                {this.state.mission.pages.map(page => {
                  return page.groups.map(group => {
                    return group.questions.map(question => {
                      return (
                        <div key={question.id} className="row container">
                          <div className="col-lg-8">
                            <div className="row">
                              <pre>{JSON.stringify(question, null, '\t')}</pre>
                              <br />
                            </div>
                          </div>
                        </div>
                      );
                    });
                  });
                })}

                <div className="row container">
                  <div className="col-lg-8">
                    <div className="row">
                      <p>How did you learn about braiven datakit?</p>
                      <br />
                    </div>

                    <div className="row">
                      <div className="k-radio-list">
                        <label className="k-radio">
                          <input name="know" type="radio" />I tool someone else's survey
                          <span />
                        </label>
                        <label className="k-radio">
                          <input name="know" type="radio" />
                          Banner Advertisement
                          <span />
                        </label>
                        <label className="k-radio">
                          <input name="know" type="radio" />
                          Search Engine
                          <span />
                        </label>
                        <label className="k-radio">
                          <input name="know" type="radio" />
                          Referal link from another site
                          <span />
                        </label>
                        <label className="k-radio">
                          <input name="know" type="radio" />
                          Magazine/Print Advertisement
                          <span />
                        </label>
                        <label className="k-radio">
                          <input name="know" type="radio" />
                          Other Please specify
                          <span />
                        </label>
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      {/* ask here */}
                      <input placeholder="Other" type="email" className="form-control" />
                    </div>

                    <br />

                    <div className="row">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            `<b>* Please provide us with some background information to help us design the app around your needs</b>`,
                          ),
                        }}
                      />
                    </div>
                    <br />

                    <div className="row">
                      <table className="table">
                        <thead>
                          <tr>
                            <td>Questions</td>
                            <td>Very Important</td>
                            <td>Important</td>
                            <td>Not important</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Survey templates</td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Increased multi-lingual support</td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Multiple Users per Account</td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Graphical charts of response data</td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                            <td>
                              <label className="k-radio">
                                <input name="know" type="radio" />
                                <span />
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <br />

                    <div className="row">{/* ask here */}</div>

                    <div className="row">{/* ask here */}</div>

                    <div className="row">{/* ask here */}</div>
                  </div>
                  {/* ask here */}
                </div>

                {/* other questions come in here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
