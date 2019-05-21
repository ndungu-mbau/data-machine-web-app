import React, { Component } from 'react';
const $ = window.$;

class DatePicker extends Component {
  state = {
    invalid: undefined,
  };
  componentDidMount() {
    $('#kt_datepicker_6').datepicker();
  }
  render() {
    const { validateOnBlur, tag } = this.props;
    const { invalid } = this.state;
    return (
      <>
        <div className="row" id={tag}>
          <div className="col-lg-2 text-center">
            <i className="flaticon-calendar-with-a-clock-time-tools" style={{ fontSize: '50px' }} />
          </div>
          <div className="col-lg-8 col-md-9 col-sm-12">
            <div
              id="kt_datepicker_6"
              className={invalid && 'is-invalid'}
              onBlur={e => {
                const invalid = validateOnBlur({ tag: tag });
                this.setState({ invalid });
              }}
            />
          </div>
        </div>
        {invalid &&
          invalid.map(invalidMessage => (
            <div class="invalid-feedback" style={{ display: 'block' }}>
              {invalidMessage}
            </div>
          ))}
      </>
    );
  }
}

export default DatePicker;
