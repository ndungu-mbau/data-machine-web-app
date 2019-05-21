import React, { Component } from 'react';

class SingleSelect extends Component {
  render() {
    const { options, tag, setAnswer } = this.props;
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
                    setAnswer({
                      tag: `${tag}`,
                      value: `${tag}_${option.label}`,
                    });
                    setAnswer({
                      tag: `${tag}_${option.label}`,
                      value: option.value,
                    });
                    // filter then set the remaining to undefined

                    options
                      .filter(op => op !== option)
                      .forEach(({ value: opValue, label }) => {
                        setAnswer({ tag: `${tag}_${label}`, value: undefined });
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
  }
}

export default SingleSelect;
