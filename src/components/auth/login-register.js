import React, { Component } from 'react'

export default class Authorization extends Component {
    constructor(props){
        super(props);
        this.state = {
            side: 'register'
        }
    }

    toggle(side){
        if(side == 'register' && this.state.side == 'login'){
            this.setState({side})
        }else if(side == 'login' && this.state.side == 'register'){
            this.setState({side})
        }
        
    }
    render() {
        
        return (
            
            <div>
                <div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
                    <div className="form-wrap">
                        <div className="tab">
                            <ul className="tab-menu">
                                <li className={`${this.state.side === "register" ? "active" : '' } gtco-first`}><a href="#" onClick={()=>this.toggle('register')}>Sign up</a></li>
                                <li className={`${this.state.side === "login" ? "active" : '' } gtco-second`}><a href="#" onClick={()=>this.toggle('login')}>Login</a></li>
                            </ul>
                            
                            <div className="tab-content">
                            { this.state.side === 'register' &&
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
                            }
                                { this.state.side === 'login' &&
                                <div className="tab-content-inner active" data-content="login">
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
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}