import React, { Component } from 'react';

class Input extends Component {
  state = {
    invalid: undefined,
  };

  static getDerivedStateFromProps(props) {
    return {
      invalid: props.invalidProp,
    };
  }

  render() {
    const { placeholder, setAnswer, getAnswer, tag, validateOnBlur } = this.props;
    const { invalid } = this.state;
    return (
      <>
        <input
          id={tag}
          placeholder={placeholder}
          type="text"
          className={`form-control ${invalid && 'is-invalid'}`}
          onChange={e => {
            setAnswer({
              tag,
              value: e.target.value,
            });
          }}
          onBlur={e => {
            const invalid = validateOnBlur({ tag: tag });
            console.log(invalid);
            this.setState({ invalid });
          }}
          value={getAnswer({ tag })}
        />
        {invalid &&
          Object.values(invalid).map(invalidMessage => (
            <div key={invalidMessage} class="invalid-feedback" style={{ display: 'block' }}>
              {invalidMessage}
            </div>
          ))}
      </>
    );
  }
}

export default Input;
