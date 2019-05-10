import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../../config';

const { apiUrl: url } = config[process.env.NODE_ENV];

class File extends Component {
  state = {
    file: '',
  };

  onChange = e => {
    console.log(e);
    this.setState({ file: e.target.files[0] });
  };

  onClickHandler = async () => {
    const data = new FormData();
    data.append('file', this.state.file);
    const res = await axios.request({
      url,
      method: 'post',
      data,
      onUploadProgress: console.log,
    });
    console.log(res);
  };

  render = () => {
    return (
      <div className="row">
        <div className="col-lg-2 text-center">
          <i className="flaticon-attachment k-font-info" style={{ fontSize: '50px' }} />
        </div>
        <div className="col-lg-8 col-md-9 col-sm-12">
          <br />
          <input placeholder=" " type="file" className="form-control" onChange={this.onChange} />
        </div>
      </div>
    );
  };
}

export default File;
