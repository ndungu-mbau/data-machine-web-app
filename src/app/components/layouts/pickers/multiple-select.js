import React, { Component } from 'react';

class MultipleSelect extends Component {
  render() {
    const { tag, options, setAnswer } = this.props;
    return (
      <div className="k-checkbox-list">
        {options.map(option => {
          return (
            <label key={option.label + option.value} className="k-checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  setAnswer({
                    tag: `${tag}_option_${option.label.replace(/\s/g, '_')}`,
                    value: option.value,
                  });
                }}
              />
              {option.label}
              <span />
            </label>
          );
        })}
      </div>
    );
  }
}

export default MultipleSelect;
