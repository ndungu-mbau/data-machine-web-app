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

export default class Decider extends Component {
  setAnswer = ({ tag, value }) => {
    this.props.setAnswer({ tag, value });
  };
  getAnswer = ({ tag }) => {
    return this.props.getAnswer({ tag });
  };

  render() {
    const { type, placeholder, options, tag, sentences } = this.props.question.question;
    const { invalid, validateOnBlur } = this.props;

    if (type === 'instruction') return <Instruction placeholder={placeholder} />;

    if (type === 'singleSelect')
      return (
        <SingleSelect
          tag={tag}
          options={options}
          setAnswer={this.setAnswer}
          invalidProp={invalid}
          validateOnBlur={validateOnBlur}
        />
      );

    if (type === 'input')
      return (
        <Input
          tag={tag}
          placeholder={placeholder}
          setAnswer={this.setAnswer}
          getAnswer={this.getAnswer}
          invalidProp={invalid}
          validateOnBlur={validateOnBlur}
        />
      );

    if (type === 'likert')
      return (
        <Likert
          options={options}
          sentences={sentences}
          invalid={invalid}
          validateOnBlur={validateOnBlur}
          tag={tag}
        />
      );

    if (type === 'multipleSelect')
      return (
        <MultipleSelect
          tag={tag}
          options={options}
          setAnswer={this.setAnswer}
          getAnswer={this.getAnswer}
          invalidProp={invalid}
          validateOnBlur={validateOnBlur}
        />
      );

    if (type === 'GpsCoordinates')
      return <GpsCoordinates invalid={invalid} validateOnBlur={validateOnBlur} />;

    if (type === 'queryQuestion')
      return <QueryQuestion invalid={invalid} validateOnBlur={validateOnBlur} />;

    if (type === 'file')
      return (
        <File
          type="file"
          tag={tag}
          setAnswer={this.setAnswer}
          invalid={invalid}
          validateOnBlur={validateOnBlur}
        />
      );

    if (type === 'cameraImage')
      return (
        <File
          type="cameraImage"
          tag={tag}
          setAnswer={this.setAnswer}
          invalid={invalid}
          validateOnBlur={validateOnBlur}
        />
      );

    if (type === 'time') return <TimePicker invalid={invalid} validateOnBlur={validateOnBlur} />;

    if (type === 'date') return <DatePicker invalid={invalid} validateOnBlur={validateOnBlur} />;

    if (type === 'signature')
      return (
        <Signature
          tag={tag}
          getAnswer={this.getAnswer}
          setAnswer={this.setAnswer}
          invalid={invalid}
          validateOnBlur={validateOnBlur}
        />
      );

    return <h4 style={{ color: 'red' }}>{type} Not implemented</h4>;
  }
}
