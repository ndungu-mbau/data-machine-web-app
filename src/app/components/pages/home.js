/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Sidebar from '../layouts/sidebar';
import Header from '../layouts/header';

export default class Home extends Component {
  render() {
    return (
      <div className="k-grid k-grid--hor k-grid--root">
        <div className="k-grid__item k-grid__item--fluid k-grid k-grid--ver k-page">
          <button id="k_aside_close_btn" className="k-aside-close">
            <i className="la la-close" />
          </button>
          <Sidebar />
          <div className="k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper">
            <Header />
            {/* <div className="k-content k-grid__item k-grid__item--fluid k-grid k-grid--hor">
              <div className="k-content__head k-grid__item">
                <div
                  data-intro="This section contains simple statistics of the company"
                  data-position="right"
                  data-step={6}
                  className="k-content__head-main"
                >
                  <h3 className="k-content__head-title">Barney Enterprises</h3>
                  <div className="k-content__head-breadcrumbs">
                    <a href="#" className="k-content__head-breadcrumb-home">
                      <i className="flaticon2-shelter" />
                    </a>
                    <span className="k-content__head-breadcrumb-separator" />
                    <a className="k-content__head-breadcrumb-link">Projects: 1</a>
                    <span className="k-content__head-breadcrumb-separator" />
                    <a className="k-content__head-breadcrumb-link">Submisions: 0</a>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="k-content k-grid__item k-grid__item--fluid k-grid k-grid--hor">
              <div className="k-content__body k-grid__item k-grid__item--fluid">
                {/* body content here */}

                {/* other questions come in here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
