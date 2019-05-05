import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import requestBackend from './../../requestToolbox';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      phone: '',
    };
  }

  handleChange(event) {
    this.setState({ phone: event.target.value.trim() });
  }
  passChange(event) {
    this.setState({ password: event.target.value.trim() });
  }
  authUser(event) {
    console.log(this.state.phone);
    event.preventDefault();
    requestBackend({ ...this.state }, '/auth/login');
  }
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://preview.webpixels.io/purpose-website-ui-kit-v2.0.0/assets/css/purpose.css"
            id="stylesheet"
          />
        </Helmet>
        <div className="g-sidenav-show g-sidenav-pinned main-content container h-100vh d-flex align-items-center">
          <div className="col">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div>
                  <div className="mb-5 text-center">
                    <p>Login</p>
                    <img src="./assets/media/logos/all-black.svg" alt="" />
                  </div>
                  <span className="clearfix" />
                  <form noValidate className="needs-validation">
                    <div className="form-group">
                      <label htmlFor="input-mail" className="form-control-label">
                        phone
                      </label>
                      <div className="input-group input-group-merge">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-user" />
                          </span>
                        </div>
                        <input
                          data-error="Please enter a valid email"
                          required
                          type="number"
                          id="input-mail"
                          placeholder="ie. 131 2323 232"
                          className="form-control"
                          onInput={this.handleChange.bind(this)}
                          value={this.state.phone}
                        />
                      </div>
                      <div className="invalid-feedback">Please enter a valid email</div>
                      <div className="valid-feedback">looks ok</div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <label className="form-control-label">Password</label>
                        </div>
                      </div>
                      <div className="input-group input-group-merge">
                        <div className="input-group input-group-merge">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-key" />
                            </span>
                          </div>
                          <input
                            data-error="Please enter a password"
                            required
                            type="password"
                            id="input-password"
                            placeholder="Password"
                            className="form-control"
                            onInput={this.passChange.bind(this)}
                            value={this.state.password}
                          />
                          <div className="input-group-append" style={{ cursor: 'pointer' }}>
                            <span className="input-group-text">
                              <i className="fas fa-eye" />
                            </span>
                          </div>
                        </div>
                        <div className="invalid-feedback">Please enter a password</div>
                        <div className="valid-feedback">looks ok</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        onClick={e => this.authUser(e)}
                        className="btn btn-block btn-primary"
                      >
                        {' '}
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
