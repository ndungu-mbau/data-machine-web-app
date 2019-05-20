import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../../config';

const { apiUrl: url } = config[process.env.NODE_ENV];

class File extends Component {
  state = {
    file: '',
  };

  onChange = async e => {
    e.preventDefault();
    e.persist();

    this.setState({ file: e.target.files[0] });

    const data = new FormData();
    data.append('file', e.target.files[0]);
    const {
      data: { uri },
    } = await axios({
      url: `${url}/upload`,
      method: 'post',
      data,
    });

    this.props.setAnswer({ tag: this.props.tag, value: uri });
  };

  render = () => {
    return (
      <div className="row">
        <div className="col-lg-2 text-center">
          <i
            className={`flaticon-${
              this.props.type === 'file' ? 'attachment' : 'photo-camera'
            } k-font-info`}
            style={{ fontSize: '50px' }}
          />
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
