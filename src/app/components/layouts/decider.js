import React, { Component } from 'react';

import File from './pickers/file';
import Instruction from './pickers/instruction';
import SingleSelect from './pickers/single-select';
import Input from './pickers/input';
import Likert from './pickers/likert';
import MultipleSelect from './pickers/multiple-select';
import GpsCoordinates from './pickers/gps-coordinates';
import QueryQuestion from './pickers/query-question';
import TimePicker from './pickers/time-picker';
import DatePicker from './pickers/date-picker';
import Signature from './pickers/signature.js';

const $ = window.$;

export default class Decider extends Component {
  setAnswer = ({ tag, value }) => {
    this.props.setAnswer({ tag, value });
  };
  getAnswer = ({ tag }) => {
    return this.props.getAnswer({ tag });
  };
  componentDidMount() {
    $('#kt_datepicker_6').datepicker();
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
    const { type, placeholder, options, tag, sentences } = this.props.question.question;

    if (type === 'instruction') return <Instruction placeholder={placeholder} />;

    if (type === 'singleSelect')
      return <SingleSelect tag={tag} options={options} setAnswer={this.setAnswer} />;

    if (type === 'input')
      return (
        <Input
          tag={tag}
          placeholder={placeholder}
          setAnswer={this.setAnswer}
          getAnswer={this.getAnswer}
        />
      );

    if (type === 'likert') return <Likert options={options} sentences={sentences} />;

    if (type === 'multipleSelect')
      return <MultipleSelect tag={tag} options={options} setAnswer={this.setAnswer} />;

    if (type === 'GpsCoordinates') return <GpsCoordinates />;

    if (type === 'queryQuestion') return <QueryQuestion />;

    if (type === 'file') return <File type="file" tag={tag} setAnswer={this.setAnswer} />;

    if (type === 'cameraImage')
      return <File type="cameraImage" tag={tag} setAnswer={this.setAnswer} />;

    if (type === 'time') return <TimePicker />;

    if (type === 'date') return <DatePicker />;

    if (type === 'signature')
      return <Signature tag={tag} getAnswer={this.getAnswer} setAnswer={this.setAnswer} />;

    return <h4 style={{ color: 'red' }}>{type} Not implemented</h4>;
  }
}
