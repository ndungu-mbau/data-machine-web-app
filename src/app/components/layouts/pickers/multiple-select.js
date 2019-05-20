import React, { Component } from 'react';

class MultipleSelect extends Component {
  render() {
    const { tag, options, setAnswer, getAnswer } = this.props;
    return (
      <div className="k-checkbox-list">
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
                      return;
                    }
                  }

                  setAnswer({
                    tag: tag,
                    value: varSet,
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
