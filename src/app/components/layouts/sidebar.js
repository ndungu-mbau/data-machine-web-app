/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Data from '../../services/data';

import { withRouter, Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      missions: [],
      firstName: JSON.parse(localStorage.getItem('user')),
    };
  }
  async componentDidMount() {
    var data = await Data.getMissions();

    this.setState({ missions: data });
  }
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
            <Link to="/">
              <img alt="Logo" src="/assets/media/logos/v3-white.svg" style={{ height: '40px' }} />
            </Link>
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
              {this.state.missions.map(mission => {
                return (
                  <li
                    key={mission.questionnaire.id}
                    aria-haspopup="true"
                    className={`k-menu__item ${
                      mission.questionnaire.id === this.props.match.params.id
                        ? 'k-menu__item--active'
                        : ''
                    }`}
                  >
                    <Link to={`/project/${mission.questionnaire.id}`} className="k-menu__link">
                      <i className="k-menu__link-bullet k-menu__link-bullet--dot">
                        <span />
                      </i>
                      <span className="k-menu__link-text">{mission.name}</span>
                    </Link>
                  </li>
                );
              })}
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

//Component

export default withRouter(Sidebar);
