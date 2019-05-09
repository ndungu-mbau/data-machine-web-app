import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SignatureCanvas from 'react-signature-canvas';

const $ = window.$;

class Modal extends Component {
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
  }
  render() {
    return (
      <div className="modal fade">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div>
              <div className="modal-header">
                <h5 className="modal-title">Please Sign below</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <SignatureCanvas
                  penColor="blue"
                  canvasProps={{ width: '700', height: '400', className: 'sigCanvas' }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
