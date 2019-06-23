import React, { Component } from 'react';

class Likert extends Component {
  render() {
    const { options, sentences, invalid, tag } = this.props;
    return (
      <div className="row" id={tag}>
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
                          <input
                            name={sentences.sentenceLabel}
                            type="radio"
                            className={invalid && 'is-invalid'}
                          />
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
        {invalid &&
          Object.values(invalid).map(invalidMessage => (
            <div key={invalidMessage} class="invalid-feedback" style={{ display: 'block' }}>
              {invalidMessage}
            </div>
          ))}
      </div>
    );
  }
}

export default Likert;
