/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div
        id="k_aside"
        className="k-aside k-aside--fixed k-grid__item k-grid k-grid--desktop k-grid--hor-desktop"
      >
        <div
          id="k_aside_brand"
          className="k-aside__brand k-grid__item"
          k-hidden-height={75}
          style={{}}
        >
          <div className="k-aside__brand-logo">
            <a href="/">
              <img alt="Logo" src="/assets/media/logos/v3-white.svg" style={{ height: '40px' }} />
            </a>
          </div>
          <div className="k-aside__brand-tools">
            <button
              id="k_aside_toggler"
              className="k-aside__brand-aside-toggler k-aside__brand-aside-toggler--left"
            >
              <span />
            </button>
          </div>
        </div>
        <div
          id="k_aside_menu_wrapper"
          className="k-aside-menu-wrapper k-grid__item k-grid__item--fluid"
        >
          <div
            data-kmenu-dropdown-timeout={500}
            data-kmenu-scroll={1}
            data-kmenu-vertical={1}
            id="k_aside_menu"
            className="k-aside-menu k-scroll ps"
            style={{ height: '847px', overflow: 'hidden' }}
          >
            <ul className="k-menu__nav">
              <li className="k-menu__section">
                <h4 className="k-menu__section-text">Projects</h4>
                <i className="k-menu__section-icon flaticon-more-v2" />
              </li>
              <li
                aria-haspopup="true"
                className="k-menu__item k-menu__item--active"
                href="/projects/5cce8cc39a008b1ed5a09a9a"
              >
                <a href="/projects/5cce8cc39a008b1ed5a09a9a" className="k-menu__link">
                  <i className="k-menu__link-bullet k-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="k-menu__link-text">Add Incoming patient</span>
                </a>
              </li>
              <li
                aria-haspopup="true"
                className="k-menu__item k-menu__item--active"
                href="/projects/5cce8cc39a008b1ed5a09a9a"
              >
                <a href="/projects/5cce8cc39a008b1ed5a09a9a" className="k-menu__link">
                  <i className="k-menu__link-bullet k-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="k-menu__link-text">Process Existing patient</span>
                </a>
              </li>
              <li
                aria-haspopup="true"
                className="k-menu__item k-menu__item--active"
                href="/projects/5cce8cc39a008b1ed5a09a9a"
              >
                <a href="/projects/5cce8cc39a008b1ed5a09a9a" className="k-menu__link">
                  <i className="k-menu__link-bullet k-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="k-menu__link-text">Report Complaint</span>
                </a>
              </li>
              <li
                aria-haspopup="true"
                className="k-menu__item k-menu__item--active"
                href="/projects/5cce8cc39a008b1ed5a09a9a"
              >
                <a href="/projects/5cce8cc39a008b1ed5a09a9a" className="k-menu__link">
                  <i className="k-menu__link-bullet k-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="k-menu__link-text">Update Patient Kpi Details</span>
                </a>
              </li>
              <li className="k-menu__section">
                <h4 className="k-menu__section-text">Reports</h4>
                <i className="k-menu__section-icon flaticon-more-v2" />
              </li>
              <li
                aria-haspopup="true"
                className="k-menu__item "
                href="/teams/5cce8cc39a008b35aba09a99"
              >
                <a href="/teams/5cce8cc39a008b35aba09a99" className="k-menu__link">
                  <i className="k-menu__link-bullet k-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="k-menu__link-text">Comleted patients</span>
                </a>
              </li>
              <li
                aria-haspopup="true"
                className="k-menu__item "
                href="/teams/5cce8cc39a008b35aba09a99"
              >
                <a href="/teams/5cce8cc39a008b35aba09a99" className="k-menu__link">
                  <i className="k-menu__link-bullet k-menu__link-bullet--dot">
                    <span />
                  </i>
                  <span className="k-menu__link-text">Pending patients</span>
                </a>
              </li>
            </ul>
            <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
              <div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} />
            </div>
            <div className="ps__rail-y" style={{ top: '0px', right: '2px' }}>
              <div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} />
            </div>
          </div>
        </div>
        <div
          id="k_aside_footer"
          className="k-aside__footer k-grid__item"
          k-hidden-height={59}
          style={{}}
        >
          <div className="k-aside__footer-nav">
            <div className="k-aside__footer-item">
              <a href="/settings" className="btn btn-icon">
                <i className="flaticon2-gear" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
