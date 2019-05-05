import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="g-sidenav-show g-sidenav-pinned main-content container h-100vh d-flex align-items-center">
        <div className="col">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div>
                <div className="mb-5 text-center">
                  <p>Login</p>
                  <img src="./assets/media/logos/all-black.svg" alt />
                </div>
                <span className="clearfix" />
                <form noValidate className="needs-validation">
                  <div className="form-group">
                    <label htmlFor="input-mail" className="form-control-label">
                      Email address
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
                        type="email"
                        id="input-mail"
                        placeholder="ie. username@domain.com"
                        className="form-control"
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
                      <div className="mb-2">
                        <a
                          href="/recover/send"
                          className="small text-muted text-underline--dashed border-primary"
                        >
                          Lost password?
                        </a>
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
                    <button type="submit" className="btn btn-block btn-primary">
                      {' '}
                      Sign in
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    <small>Not registered?</small>
                    <a href="/register" className="small font-weight-bold">
                      {' '}
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
