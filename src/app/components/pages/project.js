/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Sidebar from '../layouts/sidebar';
import Header from '../layouts/header';
import Decider from '../layouts/decider';
import _ from 'underscore';

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
      var data = await Data.getMission(this.props.match.params.id);

      this.setState({ mission: data });
    }
  }
  render() {
    console.log(this.state.mission);
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

                <div className="row container">
                  <div className="col-lg-8">
                    {this.state.mission.pages.map(page => {
                      return _.sortBy(page.groups, 'name').map(group => {
                        let questionsOrdered = [];

                        if (this.state.mission.order) {
                          group.questions.map(
                            q => (questionsOrdered[this.state.mission.order.indexOf(q.id)] = q),
                          );
                        } else {
                          questionsOrdered = _.sortBy(group.questions, 'position');
                        }

                        // // filter to spread to get more natural positions and remove empty spaces
                        const questionsCleaned = [...questionsOrdered.filter(q => q)];

                        return questionsCleaned.map(question => {
                          return (
                            <span key={question.id}>
                              <div className="row">
                                <Decider question={{ question }} />

                                {/* <pre>{JSON.stringify(question, null, '\t')}</pre> */}
                              </div>
                              <br />
                            </span>
                          );
                        });
                      });
                    })}
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
