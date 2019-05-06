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

    return <h4 style={{ color: 'red' }}>{type} Not implemented</h4>;
  }
}
