import React, { Component } from 'react';
import DOMPurify from 'dompurify';

export default class Decider extends Component {
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
                <label className="k-radio">
                  <input name={tag} type="radio" />
                  {option.label}
                  <span />
                </label>
              );
            })}
          </div>
        </span>
      );

    if (type === 'input')
      return <input placeholder={placeholder} type="text" className="form-control" />;

    if (type === 'likert')
      return (
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <td />
                {options.map(option => {
                  return <td>{option.label}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {sentences.map(sentences => {
                return (
                  <tr>
                    <td>{sentences.sentenceLabel}</td>
                    {options.map(option => {
                      return (
                        <td>
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
          <label className="k-checkbox">
            <input type="checkbox" />
            er
            <span />
          </label>
          <label className="k-checkbox">
            <input type="checkbox" />
            er
            <span />
          </label>
        </div>
      );

    if (type === 'GpsCoordinates')
      return (
        <div className="row">
          <div className="col-lg-4 text-center">
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
          <div className="col-lg-4">
            <button className="btn btn-sm btn-success">Query</button>
          </div>
        </div>
      );

    if (type === 'file') return <input placeholder=" " type="file" className="form-control" />;

    if (type === 'time')
      return (
        <div className="row">
          <div className="col-lg-4 text-center">
            <i className="flaticon-clock-1 k-font-info" style={{ fontSize: '50px' }} />
          </div>
        </div>
      );

    if (type === 'date')
      return (
        <div className="row">
          <div className="col-lg-4 text-center">
            <i className="flaticon-calendar-with-a-clock-time-tools" style={{ fontSize: '50px' }} />
          </div>
        </div>
      );

    if (type === 'signature')
      return (
        <div className="row">
          <div className="col-lg-4 text-center">
            <i
              className="flaticon2-edit-interface-symbol-of-pencil-tool"
              style={{ fontSize: '50px' }}
            />
          </div>
        </div>
      );

    return <h4 style={{ color: 'red' }}>{type} Not implemented</h4>;
  }
}
