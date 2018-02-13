import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './navigation.css';
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
                      </span>}
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </nav>
        </div>
        )
    }
}