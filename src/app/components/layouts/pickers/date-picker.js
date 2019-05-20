import React, { Component } from 'react';
const $ = window.$;

class DatePicker extends Component {
  componentDidMount() {
    $('#kt_datepicker_6').datepicker();
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-2 text-center">
          <i className="flaticon-calendar-with-a-clock-time-tools" style={{ fontSize: '50px' }} />
        </div>
        <div className="col-lg-8 col-md-9 col-sm-12">
          <div className id="kt_datepicker_6" />
        </div>
      </div>
    );
  }
}

export default DatePicker;
