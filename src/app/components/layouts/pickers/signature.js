import React, { Component } from 'react';

import Modal from '../modals/create_signature';

class SignaturePicker extends Component {
  state = {
    showModal: false,
  };

  handleHideModal() {
    this.setState({ showModal: false });
  }

  handleShowModal() {
    this.setState({ showModal: true });
  }

  render() {
    const { tag, getAnswer, setAnswer, invalid } = this.props;
    return (
      <div className="row" id={tag}>
        <div className="col-lg-2 text-center">
          <i
            className="flaticon2-edit-interface-symbol-of-pencil-tool"
            style={{ fontSize: '50px' }}
          />
        </div>
        <div className="col-lg-8 text-center">
          {getAnswer({
            tag,
          }) ? (
            <img
              alt="signature"
              className={invalid && 'is-invalid'}
              src={getAnswer({
                tag,
              })}
            />
          ) : null}
          <br />
          <button className="btn btn-default btn-block" onClick={() => this.handleShowModal()}>
            Create Signature
          </button>
          {this.state.showModal === true ? (
            <Modal
              handleHideModal={() => this.handleHideModal()}
              setAnswer={({ value }) => {
                setAnswer({
                  tag,
                  value,
                });
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SignaturePicker;
