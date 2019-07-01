/* eslint-disable jsx-a11y/anchor-is-invalid */
import React, { Component } from 'react';
import Sidebar from '../layouts/sidebar';
import Header from '../layouts/header';
import _ from 'underscore';

import Data from '../../services/data';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  async componentDidMount() {
    // var { url } = await Data.getDashboardUrl(this.props.match.params.id);
    // console.log({ url });
    this.setState({
      url: 'https://metabase.braiven.io/public/dashboard/fcc20dcb-544c-44c8-9dd5-ddc0318e8be0',
      loading: false,
    });
  }
  iframe() {
    return {
      __html: `<iframe name="" src="${this.state.url}" width="100%" style="height: 100em"/>`,
    };
  }
  render() {
    const { invalid, loading } = this.state;

    return (
      <div className="k-grid k-grid--hor k-grid--root">
        <div className="k-grid__item k-grid__item--fluid k-grid k-grid--ver k-page">
          <button id="k_aside_close_btn" className="k-aside-close">
            <i className="la la-close" />
          </button>
          <Sidebar loading={loading} />
          <div className="k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper">
            <Header />
            <div className="k-content k-grid__item k-grid__item--fluid k-grid k-grid--hor">
              <div className="row" dangerouslySetInnerHTML={this.iframe()}>
                {/* <div className="col-12 col-lg-8 col-md-10 col-sm-12">Iframe here</div> */}
                {/* <div dangerouslySetInnerHTML={this.iframe()} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
