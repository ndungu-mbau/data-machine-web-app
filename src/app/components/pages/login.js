import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { requestBackend } from './../../requestToolbox';
import toast from '../../services/toast';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      phone: '',
      showPass: false,
    };
  }

  handleChange(event) {
    this.setState({ phone: event.target.value.trim() });
  }
  passChange(event) {
    this.setState({ password: event.target.value });
  }
  componentDidMount() {
    const forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, form => {
      form.addEventListener('submit', async event => {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          return form.classList.add('was-validated');
        }

        const { phone, password } = this.state;

        try {
          var response = await requestBackend({ phone, password }, '/auth/login');
          console.log(response.data);
          window.localStorage.setItem(
            'user',
            JSON.stringify(
              Object.assign({}, response.data, {
                token: undefined,
              }),
            ),
          );
          window.localStorage.setItem('token', response.data.token);
          return this.props.history.push('/');
        } catch (err) {
          if (err.response.data) toast.error(err.response.data.message);
        }
      });
    });
  }
  render() {
    return [
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://preview.webpixels.io/purpose-website-ui-kit-v2.0.1/assets/css/purpose.css"
          id="stylesheet"
        />
      </Helmet>,
      <div className="g-sidenav-show g-sidenav-pinned main-content container h-100vh d-flex align-items-center">
        <div className="col">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div>
                <div className="mb-5 text-center">
                  <p>Login</p>
                  <img style={{ width: '220px' }} src="./assets/media/logos/all-black.png" alt="" />
                </div>
                <span className="clearfix" />
                {this.state.error ? (
                  <div role="alert" className="alert alert-danger">
                    <div className="alert-icon">
                      <i className="flaticon-questions-circular-button" />
                    </div>
                    <div className="alert-text">{this.state.error}</div>
                  </div>
                ) : (
                  ''
                )}
                <form noValidate className="needs-validation">
                  <div className="form-group">
                    <label htmlFor="input-mail" className="form-control-label">
                      Your Phone Number
                    </label>
                    <div className="input-group input-group-merge">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user" />
                        </span>
                      </div>
                      <input
                        data-error="Please enter a valid phone number"
                        required
                        type="text"
                        id="input-mail"
                        placeholder="ie. 0712 345 789"
                        className="form-control"
                        onChange={e => {
                          this.setState({ phone: e.target.value });
                        }}
                        value={this.state.phone}
                      />
                    </div>
                    <div className="invalid-feedback">Please enter a valid email</div>
                    <div className="valid-feedback">looks ok</div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <label className="form-control-label">Your Password</label>
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
                          type={this.state.showPass === true ? 'text' : 'password'}
                          id="input-password"
                          placeholder="Password"
                          className="form-control"
                          onChange={e => {
                            this.setState({ password: e.target.value });
                          }}
                          value={this.state.password}
                        />
                        <div className="input-group-append" style={{ cursor: 'pointer' }}>
                          <span
                            onClick={() => {
                              this.setState({ showPass: true });
                              setTimeout(() => {
                                this.setState({ showPass: false });
                              }, 2000);
                            }}
                            className="input-group-text"
                          >
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
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}
