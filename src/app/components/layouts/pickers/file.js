import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../../config';

const { apiUrl: url } = config[process.env.NODE_ENV];

class File extends Component {
  state = {
    file: '',
  };

  static getDerivedStateFromProps(props) {
    return {
      invalid: props.invalid,
    };
  }

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
    const { validateOnBlur, tag } = this.props;
    const { invalid } = this.state;
    return (
      <>
        <div className="row" id={tag}>
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
            <input
              placeholder=" "
              type="file"
              className={`form-control ${invalid === undefined ? '' : 'is-invalid'}`}
              onChange={this.onChange}
              onBlur={e => {
                const invalid = validateOnBlur({ tag: tag });
                this.setState({ invalid });
              }}
            />
          </div>
        </div>
        {invalid === undefined
          ? null
          : Object.values(invalid).map(invalidMessage => (
              <div class="invalid-feedback" style={{ display: 'block' }}>
                {invalidMessage}
              </div>
            ))}
      </>
    );
  };
}

export default File;
