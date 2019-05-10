/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Sidebar from '../layouts/sidebar';
import Header from '../layouts/header';
import Decider from '../layouts/decider';
import _ from 'underscore';
import swal from 'sweetalert2';

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
  async submitForm({ mission }) {
    // swal to ask if you are sure you want
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
          swal.fire('Submitted!', 'Your Data has successfully been submitted.', 'success');
        }
      });
  }
  async componentDidMount() {
    var data = await Data.getMission(this.props.match.params.id);

    this.setState({ mission: data }, function() {
      Data.setAnswer({
        mission: this.state.mission.id,
        tag: 'startedAt',
        value: new Date().toISOString(),
      });
    });
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
              <div className="row">
                <div className="col-12 col-lg-8 col-md-10 col-sm-12">
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
                                  <Decider
                                    question={{ question }}
                                    getAnswer={({ tag }) => {
                                      Data.getAnswer({
                                        mission: this.state.mission.id,
                                        tag,
                                      });
                                    }}
                                    setAnswer={({ tag, value }) => {
                                      Data.setAnswer({
                                        mission: this.state.mission.id,
                                        tag,
                                        value,
                                      });
                                    }}
                                  />
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

// ('use strict');
// var KTSweetAlert2Demo = {
//   init: function() {
//     $('#kt_sweetalert_demo_1').click(function(t) {
//       swal('Good job!');
//     }),
//       $('#kt_sweetalert_demo_2').click(function(t) {
//         swal("Here's the title!", "...and here's the text!");
//       }),
//       $('#kt_sweetalert_demo_3_1').click(function(t) {
//         swal('Good job!', 'You clicked the button!', 'warning');
//       }),
//       $('#kt_sweetalert_demo_3_2').click(function(t) {
//         swal('Good job!', 'You clicked the button!', 'error');
//       }),
//       $('#kt_sweetalert_demo_3_3').click(function(t) {
//         swal('Good job!', 'You clicked the button!', 'success');
//       }),
//       $('#kt_sweetalert_demo_3_4').click(function(t) {
//         swal('Good job!', 'You clicked the button!', 'info');
//       }),
//       $('#kt_sweetalert_demo_3_5').click(function(t) {
//         swal('Good job!', 'You clicked the button!', 'question');
//       }),
//       $('#kt_sweetalert_demo_4').click(function(t) {
//         swal({
//           title: 'Good job!',
//           text: 'You clicked the button!',
//           type: 'success',
//           confirmButtonText: 'Confirm me!',
//           confirmButtonClass: 'btn btn-focus kt-btn kt-btn--pill kt-btn--air',
//         });
//       }),
//       $('#kt_sweetalert_demo_5').click(function(t) {
//         swal({
//           title: 'Good job!',
//           text: 'You clicked the button!',
//           type: 'success',
//           confirmButtonText: "<span><i class='la la-headphones'></i><span>I am game!</span></span>",
//           confirmButtonClass: 'btn btn-danger kt-btn kt-btn--pill kt-btn--air kt-btn--icon',
//           showCancelButton: !0,
//           cancelButtonText: "<span><i class='la la-thumbs-down'></i><span>No, thanks</span></span>",
//           cancelButtonClass: 'btn btn-secondary kt-btn kt-btn--pill kt-btn--icon',
//         });
//       }),
//       $('#kt_sweetalert_demo_6').click(function(t) {
//         swal({
//           position: 'top-right',
//           type: 'success',
//           title: 'Your work has been saved',
//           showConfirmButton: !1,
//           timer: 1500,
//         });
//       }),
//       $('#kt_sweetalert_demo_7').click(function(t) {
//         swal({
//           title: 'jQuery HTML example',
//           html: $('<div>')
//             .addClass('some-class')
//             .text('jQuery is everywhere.'),
//           animation: !1,
//           customClass: 'animated tada',
//         });
//       }),
//       $('#kt_sweetalert_demo_8').click(function(t) {
//         swal({
//           title: 'Are you sure?',
//           text: "You won't be able to revert this!",
//           type: 'warning',
//           showCancelButton: !0,
//           confirmButtonText: 'Yes, delete it!',
//         }).then(function(t) {
//           t.value && swal('Deleted!', 'Your file has been deleted.', 'success');
//         });
//       }),
//       $('#kt_sweetalert_demo_9').click(function(t) {
//         swal({
//           title: 'Are you sure?',
//           text: "You won't be able to revert this!",
//           type: 'warning',
//           showCancelButton: !0,
//           confirmButtonText: 'Yes, delete it!',
//           cancelButtonText: 'No, cancel!',
//           reverseButtons: !0,
//         }).then(function(t) {
//           t.value
//             ? swal('Deleted!', 'Your file has been deleted.', 'success')
//             : 'cancel' === t.dismiss &&
//               swal('Cancelled', 'Your imaginary file is safe :)', 'error');
//         });
//       }),
//       $('#kt_sweetalert_demo_10').click(function(t) {
//         swal({
//           title: 'Sweet!',
//           text: 'Modal with a custom image.',
//           imageUrl: 'https://unsplash.it/400/200',
//           imageWidth: 400,
//           imageHeight: 200,
//           imageAlt: 'Custom image',
//           animation: !1,
//         });
//       }),
//       $('#kt_sweetalert_demo_11').click(function(t) {
//         swal({
//           title: 'Auto close alert!',
//           text: 'I will close in 5 seconds.',
//           timer: 5e3,
//           onOpen: function() {
//             swal.showLoading();
//           },
//         }).then(function(t) {
//           'timer' === t.dismiss && console.log('I was closed by the timer');
//         });
//       });
//   },
// };
// jQuery(document).ready(function() {
//   KTSweetAlert2Demo.init();
// });
