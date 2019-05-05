import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div id="k_header" className="k-header k-grid__item k-header--fixed">
        <button id="k_header_menu_mobile_close_btn" className="k-header-menu-wrapper-close">
          <i className="la la-close" />
        </button>
        <div id="k_header_menu_wrapper" className="k-header-menu-wrapper">
          <div id="k_header_menu" className="k-header-menu k-header-menu-mobile">
            <ul className="k-menu__nav">
              <li
                aria-haspopup="true"
                data-kmenu-link-redirect={1}
                data-kmenu-submenu-toggle="click"
                className="k-menu__item k-menu__item--submenu k-menu__item--rel k-menu__item--active"
              />
            </ul>
          </div>
        </div>
        <div className="k-header__topbar">
          <div className="k-header__topbar-item k-header__topbar-item--user">
            <div
              data-offset="10px -2px"
              data-toggle="dropdown"
              className="k-header__topbar-wrapper"
            >
              <div className="k-header__topbar-user">
                <span className="k-header__topbar-welcome k-hidden-mobile">Hi,</span>
                <span className="k-header__topbar-username k-hidden-mobile">Barney</span>
                <img alt="Pic" src="/assets/media/users/user-avatar.jpg" />
                <span className="k-badge k-badge--username k-badge--lg k-badge--brand k-hidden">
                  A
                </span>
              </div>
            </div>
            <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-md">
              <div
                className="k-user-card k-margin-b-50 k-margin-b-30-tablet-and-mobile"
                style={{ backgroundImage: 'url("/assets/media/misc/head_bg_sm.jpg")' }}
              >
                <div className="k-user-card__wrapper">
                  <div className="k-user-card__pic">
                    <img alt="Pic" src="/assets/media/users/user-avatar.jpg" />
                  </div>
                  <div className="k-user-card__details">
                    <div className="k-user-card__name">Barney</div>
                  </div>
                </div>
              </div>
              <ul className="k-nav k-margin-b-10">
                <li className="k-nav__item">
                  <a href="/settings" className="k-nav__link">
                    <span className="k-nav__link-icon">
                      <i className="flaticon2-calendar-3" />
                    </span>
                    <span className="k-nav__link-text">My Profile</span>
                  </a>
                </li>
                <li className="k-nav__item k-nav__item--custom k-margin-t-15">
                  <button
                    target="_blank"
                    className="btn btn-outline-metal btn-hover-brand btn-upper btn-font-dark btn-sm btn-bold"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
