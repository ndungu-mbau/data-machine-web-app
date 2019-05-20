import React, { Component } from 'react';

class GpsCoordinates extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-2 text-center">
          <i className="flaticon-placeholder-3 k-font-info" style={{ fontSize: '50px' }} />
        </div>
        <div className="col-lg-8">
          <p>Accuracy: 20m</p>
          <p>Longitude: 36.742722</p>
          <p>Latitude: -1.24567865</p>
          <p>Last picked: 16:58:06</p>
        </div>
      </div>
    );
  }
}

export default GpsCoordinates;
