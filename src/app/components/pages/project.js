/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Sidebar from '../layouts/sidebar';
import Header from '../layouts/header';
import Decider from '../layouts/decider';
import _ from 'underscore';

import Data from '../../services/data';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mission: {
        pages: [],
      },
      showModal: false,
    };
  }
  handleHideModal() {
    this.setState({ showModal: false });
  }
  handleShowModal() {
    this.setState({ showModal: true });
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
              <div className="k-portlet">
                <div className="k-portlet__head">
                  <div className="k-portlet__head-label">
                    <h3 className="k-portlet__head-title">{this.state.mission.name}</h3>
                  </div>
                </div>
                <div className="k-portlet__body">
                  <div className="k-portlet__content">
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
                              <Decider question={{ question }} />
                              <br />
                            </span>
                          );
                        });
                      });
                    })}
                  </div>
                </div>
                <div className="k-portlet__foot">
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="button" className="btn btn-sm btn-brand float-right">
                        Submit
                      </button>
                    </div>
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
