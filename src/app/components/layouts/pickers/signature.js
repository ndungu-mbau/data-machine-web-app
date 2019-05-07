import React, { Component } from 'react';
const $ = window.$;

class TimePicker extends Component {
  componentDidMount() {
    $('#kt_datepicker_6').datepicker();
  }
  render() {
    return <div id="k_header" className="k-header k-grid__item k-header--fixed" />;
  }
}

export default TimePicker;
