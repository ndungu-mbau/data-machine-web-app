import React, { Component } from 'react';

import { withRouter, Link } from 'react-router-dom';

class MobileHeader extends Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem('user')) {
      window.location = '/login';
    }

    this.state = {
      userInfo: JSON.parse(localStorage.getItem('user')),
    };
  }
  render() {
    return (
      <div id="k_header_mobile" className="k-header-mobile k-header-mobile--fixed">
        <div className="k-header-mobile__logo">
          <Link to="/">
            <img style={{ height: '20px' }} alt="Logo" src="/assets/media/logos/all-white.png" />
          </Link>
        </div>
        <div className="k-header-mobile__toolbar">
          <button
            id="k_aside_mobile_toggler"
            className="k-header-mobile__toolbar-toggler k-header-mobile__toolbar-toggler--left"
          >
            <span />
          </button>
          <button
            id="k_header_mobile_topbar_toggler"
            className="k-header-mobile__toolbar-topbar-toggler"
          >
            <i className="flaticon-more" />
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(MobileHeader);
