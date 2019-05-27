import React, { Component } from 'react';

const Box = ({ style }) => {
  return <div style={style} />;
};

class Loader extends Component {
  render() {
    return (
      <Box
        style={{
          height: '50px',
          width: this.props.width,
        }}
      />
    );
  }
}

export default Loader;
