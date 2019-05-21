import React, { Component } from 'react';

class SingleSelect extends Component {
  state = {
    invalid: undefined,
  };

  static getDerivedStateFromProps(props) {
    return {
      invalid: props.invalidProp,
    };
  }

  render() {
    const { options, tag, setAnswer, validateOnBlur } = this.props;
    const { invalid } = this.state;
    return (
      <>
        <span>
          <div className="k-radio-list" id={tag}>
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

                      validateOnBlur({ tag: tag });
                    }}
                  />
                  {option.label}
                  <span />
                </label>
              );
            })}
          </div>
        </span>
        {invalid &&
          invalid.map(invalidMessage => (
            <div key={invalidMessage} class="invalid-feedback" style={{ display: 'block' }}>
              {invalidMessage}
            </div>
          ))}
      </>
    );
  }
}

export default SingleSelect;
