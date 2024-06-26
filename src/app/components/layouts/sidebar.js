/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Data from '../../services/data';
import { SkeletonLineShort } from './loader';

import { withRouter, Link } from 'react-router-dom';

@withRouter
class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      missions: [],
      firstName: JSON.parse(localStorage.getItem('user')),
      loading: true,
    };
  }
  async componentDidMount() {
    var data = await Data.getMissions();

    this.setState({ missions: data, loading: false });

    // check route and route to first project if we are on home and not showing any project
    // later this can be replaced with settings on the org
    const { pathname } = this.props.location;
    if (pathname === '/') {
      this.props.history.push(`/project/${data[0].questionnaire.id}`);
    }
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
              <img alt="Logo" src="/assets/media/logos/all-white.png" style={{ height: '20px' }} />
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
              {this.state.loading ? (
                <>
                  <SkeletonLineShort width="80%" />
                  <SkeletonLineShort width="80%" />
                  <SkeletonLineShort width="80%" />
                </>
              ) : (
                this.state.missions.map(mission => {
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
                })
              )}
            </ul>

            <ul className="k-menu__nav">
              <li className="k-menu__section">
                <h4 className="k-menu__section-text">Dashboards</h4>
                <i className="k-menu__section-icon flaticon-more-v2" />
              </li>
              {this.state.loading ? (
                <>
                  <SkeletonLineShort width="80%" />
                  <SkeletonLineShort width="80%" />
                  <SkeletonLineShort width="80%" />
                </>
              ) : (
                <li
                  // key={mission.questionnaire.id}
                  // aria-haspopup="true"
                  className={`k-menu__item`}
                >
                  <Link to={`/dashboard/1`} className="k-menu__link">
                    <i className="k-menu__link-bullet k-menu__link-bullet--dot">
                      <span />
                    </i>
                    <span className="k-menu__link-text">Dashboard One</span>
                  </Link>
                </li>
                // this.state.missions.map(mission => {
                //   return (
                //     <li
                //       key={mission.questionnaire.id}
                //       aria-haspopup="true"
                //       className={`k-menu__item ${
                //         mission.questionnaire.id === this.props.match.params.id
                //           ? 'k-menu__item--active'
                //           : ''
                //       }`}
                //     >

                //     </li>
                //   );
                // })
              )}
            </ul>

            <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
              <div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} />
            </div>
            <div className="ps__rail-y" style={{ top: '0px', right: '2px' }}>
              <div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Component

export default Sidebar;
