import React, { Component } from 'react';
import DOMPurify from 'dompurify';

import Modal from '../layouts/modals/create_signature';
import File from './pickers/file';

const $ = window.$;

export default class Decider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }
  handleHideModal() {
    this.setState({ showModal: false });
  }
  handleShowModal() {
    this.setState({ showModal: true });
  }
  setAnswer({ tag, value }) {
    this.props.setAnswer({ tag, value });
  }
  getAnswer({ tag, value }) {
    return this.props.getAnswer({ tag });
  }
  componentDidMount() {
    $('#kt_datepicker_6').datepicker();
    $('#kt_datetimepicker_7').datetimepicker({
      format: 'hh:ii',
      showMeridian: !0,
      todayHighlight: !0,
      autoclose: !0,
      startView: 1,
      minView: 0,
      maxView: 1,
      forceParse: 0,
      pickerPosition: 'bottom-left',
    });
  }
  render() {
    const { type, placeholder, options, tag, sentences } = this.props.question.question;

    if (type === 'instruction')
      return (
        <span>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(placeholder),
            }}
          />
        </span>
      );

    if (type === 'singleSelect')
      return (
        <span>
          <div className="k-radio-list">
            {options.map(option => {
              return (
                <label key={option.label + option.value} className="k-radio">
                  <input
                    name={tag}
                    type="radio"
                    onClick={() => {
                      // set this one as true
                      this.setAnswer({
                        tag: `${tag}`,
                        value: `${tag}_${option.label}`,
                      });
                      this.setAnswer({
                        tag: `${tag}_${option.label}`,
                        value: option.value,
                      });
                      // filter then set the remaining to undefined

                      options.map(({ value: opValue, label }) => {
                        if (option.label !== label) {
                          this.setAnswer(`${tag}_${option.label}`, undefined);
                        }
                      });
                    }}
                  />
                  {option.label}
                  <span />
                </label>
              );
            })}
          </div>
        </span>
      );

    if (type === 'input')
      return (
        <input
          placeholder={placeholder}
          type="text"
          className="form-control"
          onChange={e => {
            this.setAnswer({
              tag,
              value: e.target.value,
            });
          }}
          value={this.getAnswer({ tag })}
        />
      );

    if (type === 'likert')
      return (
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <td />
                {options.map(option => {
                  return <td key={option.label}>{option.label}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {sentences.map(sentences => {
                return (
                  <tr key={sentences.sentenceLabel}>
                    <td>{sentences.sentenceLabel}</td>
                    {options.map(option => {
                      return (
                        <td key={option.label + option.value}>
                          <label className="k-radio">
                            <input name={sentences.sentenceLabel} type="radio" />
                            <span />
                          </label>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );

    if (type === 'multipleSelect')
      return (
        <div className="k-checkbox-list">
          {options.map(option => {
            return (
              <label key={option.label + option.value} className="k-checkbox">
                <input type="checkbox" />
                {option.label}
                <span />
              </label>
            );
          })}
        </div>
      );

    if (type === 'GpsCoordinates')
      return (
        <div className="row">
          <div className="col-lg-2 text-center">
            <i className="flaticon-placeholder-3 k-font-info" style={{ fontSize: '50px' }} />
          </div>
          <div className="col-lg-8">
            <p>Accuracy: 20m</p>
            <p>Longitude: 36.742722</p>
            <p>Latitude: -1.24567865</p>
            <p>Last picked: 16:58:06</p>
          </div>
        </div>
      );

    if (type === 'queryQuestion')
      return (
        <div className="row">
          <div className="col-lg-8">
            <div className="form-group">
              <input type="text" className="form-control form-control-sm input-mask" />
              <i className="form-group__bar" />
            </div>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-block btn-brand btn-sm">Query</button>
          </div>
        </div>
      );

    if (type === 'file') return <File />;

    if (type === 'cameraImage')
      return (
        <div className="row">
          <div className="col-lg-2 text-center">
            <i className="flaticon-photo-camera k-font-info" style={{ fontSize: '50px' }} />
          </div>
          <div className="col-lg-8 col-md-9 col-sm-12">
            <br />
            <input placeholder=" " type="file" className="form-control" />
          </div>
        </div>
      );

    if (type === 'time')
      return (
        <div className="row">
          <div className="col-lg-2 text-center">
            <i className="flaticon-clock-1 k-font-info" style={{ fontSize: '50px' }} />
          </div>
          <div className="col-lg-8 col-md-9 col-sm-12">
            <br />
            <div className="input-group date">
              <input
                type="text"
                className="form-control"
                placeholder="Select time"
                id="kt_datetimepicker_7"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="la la-calendar glyphicon-th" />
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    if (type === 'date')
      return (
        <div className="row">
          <div className="col-lg-2 text-center">
            <i className="flaticon-calendar-with-a-clock-time-tools" style={{ fontSize: '50px' }} />
          </div>
          <div className="col-lg-8 col-md-9 col-sm-12">
            <div className id="kt_datepicker_6" />
          </div>
        </div>
      );

    if (type === 'signature')
      return (
        <div className="row">
          <div className="col-lg-2 text-center">
            <i
              className="flaticon2-edit-interface-symbol-of-pencil-tool"
              style={{ fontSize: '50px' }}
            />
          </div>
          <div className="col-lg-8 text-center">
            <br />
            <button className="btn btn-default btn-block" onClick={() => this.handleShowModal()}>
              Create Signature
            </button>
            {this.state.showModal === true ? (
              <Modal handleHideModal={() => this.handleHideModal()} />
            ) : null}
          </div>
        </div>
      );

    return <h4 style={{ color: 'red' }}>{type} Not implemented</h4>;
  }
}
