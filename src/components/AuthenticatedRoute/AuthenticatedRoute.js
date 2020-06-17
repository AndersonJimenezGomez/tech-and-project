import React, {Component} from 'react'
import AuthenticationService from '../Services/AuthenticationService'
import { Route, Redirect } from 'react-router-dom'

export default class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLogged()){
           return <Route {...this.props}></Route>
        }else{
            return <Redirect to='/login'></Redirect>
        }
    }
}