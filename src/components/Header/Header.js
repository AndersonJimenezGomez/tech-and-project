
import React, { Component } from 'react'
import { withRouter } from 'react-router';


import { Link } from 'react-router-dom'
import AuthenticationService from '../Services/AuthenticationService'


 class Header extends Component {
    render() {
        const isUserLogged = AuthenticationService.isUserLogged();
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="#" className="navbar-brand">TechAndProject</a></div>
                        <ul className="navbar-nav">
                            {isUserLogged && <li><Link className="nav-link" to="/home/oe">Home</Link></li>}
                            {isUserLogged && <li><Link className="nav-link" to="/listProjects">Projects</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLogged && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLogged && <li><Link className="nav-link" to="/login" onClick={AuthenticationService.logOut}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
                <br></br>
            </div>
        )
    }
}

export default withRouter(Header);
