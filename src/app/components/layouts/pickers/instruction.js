import React, { Component } from 'react';
import DOMPurify from 'dompurify';

class Instruction extends Component {
  render() {
    return (
      <span>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(this.props.placeholder),
          }}
        />
      </span>
    );
  }
}

export default Instruction;
