import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { placeholder, setAnswer, getAnswer, tag } = this.props;
    return (
      <input
        placeholder={placeholder}
        type="text"
        className="form-control"
        onChange={e => {
          setAnswer({
            tag,
            value: e.target.value,
          });
        }}
        value={getAnswer({ tag })}
      />
    );
  }
}

export default Input;
