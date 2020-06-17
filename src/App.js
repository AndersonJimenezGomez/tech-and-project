import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import './App.css';
import LoginPage from './components/Login/Login';
import ListProjectPage from './components/ListProject/ListProjectsPage'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';
class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/listProjects" component={ListProjectPage}/>
          <Route path="/home/:userEmail" component={HomePage}/>
          <Route component ={PageNotFound}/>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}
export default App;
