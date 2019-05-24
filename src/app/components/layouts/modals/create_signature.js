import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SignatureCanvas from 'react-signature-canvas';

const $ = window.$;

class Modal extends Component {
  state = {
    height: 400,
    width: 700,
  };
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);

    // var canvasParent = document.getElementById("modal-body");

    // this.setState({
    //   height: canvasParent.offsetWidth,
    //   width: canvasParent.offsetHeight
    // });
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
              <div id="modal-body" className="modal-body">
                <SignatureCanvas
                  penColor="blue"
                  canvasProps={{
                    flex: 1,
                    width: this.state.width,
                    height: this.state.height,
                    className: 'sigCanvas',
                  }}
                  ref={ref => {
                    this.sigCanvas = ref;
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.props.setAnswer({ value: this.sigCanvas.toDataURL() });
                  $(ReactDOM.findDOMNode(this)).modal('hide');
                }}
              >
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
