  
import React, { Component } from 'react'

import { Link } from 'react-router-dom'



export default class Header extends Component {
    render() {
    

        return (
            <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://techandsolve.com/es/" className="navbar-brand">TechAndProject</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/home/oe">Home</Link></li>
                        <li><Link className="nav-link" to="/listProjects">Projects</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
            <br></br>
            </div>
        )
    }
}
