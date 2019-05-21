import React, { Component } from 'react';

class MultipleSelect extends Component {
  state = {
    invalid: undefined,
  };

  static getDerivedStateFromProps(props) {
    return {
      invalid: props.invalidProp,
    };
  }

  render() {
    const { tag, options, setAnswer, getAnswer, validateOnBlur } = this.props;
    const { invalid } = this.state;
    return (
      <>
        <div className="k-checkbox-list" id={tag}>
          {options.map(option => {
            return (
              <label key={option.label + option.value} className="k-checkbox">
                <input
                  type="checkbox"
                  onChange={e => {
                    if (e.target.checked) {
                      setAnswer({
                        tag: `${tag}_option_${option.label.replace(/\s/g, '_')}`,
                        value: option.value,
                      });
                    } else {
                      setAnswer({
                        tag: `${tag}_option_${option.label.replace(/\s/g, '_')}`,
                        value: undefined,
                      });
                    }

                    setAnswer({
                      tag: tag,
                      value: true,
                    });

                    let varSet = undefined;
                    for (const option of options) {
                      const answer = getAnswer({
                        tag: `${tag}_option_${option.label.replace(/\s/g, '_')}`,
                      });
                      if (answer) {
                        varSet = true;
                        break;
                      }
                    }

                    setAnswer({
                      tag: tag,
                      value: varSet,
                    });

                    if (!varSet) {
                      const invalid = validateOnBlur({ tag: tag });
                      this.setState({ invalid });
                    } else {
                      const invalid = validateOnBlur({ tag: tag });
                      this.setState({ invalid });
                    }
                  }}
                />
                {option.label}
                <span />
              </label>
            );
          })}
        </div>
        {invalid &&
          Object.values(invalid).map(invalidMessage => (
            <div key={invalidMessage} className="invalid-feedback" style={{ display: 'block' }}>
              {invalidMessage}
            </div>
          ))}
      </>
    );
  }
}

export default MultipleSelect;
