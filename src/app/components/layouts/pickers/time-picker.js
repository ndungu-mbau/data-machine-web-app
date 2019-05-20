import React, { Component } from 'react';
const $ = window.$;

class TimePicker extends Component {
  componentDidMount() {
    $('#kt_datetimepicker_7').datetimepicker({
      format: 'hh:ii',
      showMeridian: !0,
      todayHighlight: !0,
      autoclose: !0,
      startView: 1,
      minView: 0,
      maxView: 1,
      forceParse: 0,
      pickerPosition: 'bottom-left',
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-2 text-center">
          <i className="flaticon-clock-1 k-font-info" style={{ fontSize: '50px' }} />
        </div>
        <div className="col-lg-8 col-md-9 col-sm-12">
          <br />
          <div className="input-group date">
            <input
              type="text"
              className="form-control"
              placeholder="Select time"
              id="kt_datetimepicker_7"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="la la-calendar glyphicon-th" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimePicker;
