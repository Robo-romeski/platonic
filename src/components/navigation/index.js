import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'
import Home from '../Home'
import Dashboard from '../protected/Dashboard'
import { logout } from '../../helpers/auth'
import { firebaseAuth } from '../../config/constants'


function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  
  function PublicRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to='/dashboard' />}
      />
    )
  }

export default class Navi extends Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      loading: true,
    }
  }
      componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({
              authed: true,
              loading: false,
            })
          } else {
            this.setState({
              authed: false,
              loading: false
            })
          }
        })
      }
      componentWillUnmount () {
        this.removeListener()
      }
      
    render(){
      console.log('lists', this.props , this.state);
        return(
          <div className="page-inner">
          <nav className="gtco-nav" role="navigation">
          <div className="gtco-container">
            
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div id="gtco-logo"><Link to="/" className="navbar-brand">Handy HobNob <em>.</em></Link></div>
              </div>
              <div className="col-xs-8 text-right menu-1">
                <ul>
                <li class="btn-cta"><a href="#"><span>Get started</span></a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li className="btn-cta">
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="btn-cta"><span>Logout</span></button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/register" className="navbar-brand">Register</Link>
                      </span>}
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </nav>

        <header id="gtco-header" className="gtco-cover" role="banner" style={{backgroundImage: "url(images/img_4.jpg)"}}>
		<div className="overlay"></div>
		<div className="gtco-container">
			<div className="row">
				<div className="col-md-12 col-md-offset-0 text-left">
					

					<div className="row row-mt-15em">
						<div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
							<span className="intro-text-small">Welcome to Handy HobNob</span>
							<h1>Find friends. <br/> Do fun stuff. <br/><span>Do fun stuff with friends!</span></h1>	
						</div>
						<div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
							<div className="form-wrap">
								<div className="tab">
									<ul className="tab-menu">
										<li className="active gtco-first"><a href="#" data-tab="signup">Sign up</a></li>
										<li className="gtco-second"><a href="#" data-tab="login">Login</a></li>
									</ul>
									<div className="tab-content">
										<div className="tab-content-inner active" data-content="signup">
											<form action="#">
												<div className="row form-group">
													<div className="col-md-12">
														<label for="username">Username or Email</label>
														<input type="text" className="form-control" id="username"></input>
													</div>
												</div>
												<div className="row form-group">
													<div className="col-md-12">
														<label for="password">Password</label>
														<input type="password" className="form-control" id="password"></input>
													</div>
												</div>
												<div className="row form-group">
													<div className="col-md-12">
														<label for="password2">Repeat Password</label>
														<input type="password" className="form-control" id="password2"></input>
													</div>
												</div>

												<div className="row form-group">
													<div className="col-md-12">
														<input type="submit" className="btn btn-primary" value="Sign up"></input>
													</div>
												</div>
											</form>	
										</div>

										<div className="tab-content-inner" data-content="login">
											<form action="#">
												<div className="row form-group">
													<div className="col-md-12">
														<label for="username">Username or Email</label>
														<input type="text" className="form-control" id="username"></input>
													</div>
												</div>
												<div className="row form-group">
													<div className="col-md-12">
														<label for="password">Password</label>
														<input type="password" className="form-control" id="password"></input>
													</div>
												</div>

												<div className="row form-group">
													<div className="col-md-12">
														<input type="submit" className="btn btn-primary" value="Login"></input>
													</div>
												</div>
											</form>	
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
							
					
				</div>
			</div>
		</div>
	</header>

        </div>
        )
    }
}