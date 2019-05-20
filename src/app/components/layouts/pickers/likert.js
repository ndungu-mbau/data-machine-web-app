import React, { Component } from 'react';

class Likert extends Component {
  render() {
    const { options, sentences } = this.props;
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
  }
}

export default Likert;
