import React, { Component } from 'react';

class QueryQuestion extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="form-group">
            <input type="text" className="form-control form-control-sm input-mask" />
            <i className="form-group__bar" />
          </div>
        </div>
        <div className="col-lg-2">
          <button className="btn btn-block btn-brand btn-sm">Query</button>
        </div>
      </div>
    );
  }
}

export default QueryQuestion;
