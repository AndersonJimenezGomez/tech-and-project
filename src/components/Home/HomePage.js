import React,{Component} from 'react'


export default class HomePage extends Component{
    render(){
        return(
            <div>Welcome {this.props.match.params.userEmail} these are the projects you have worked in! </div>
        );
    }

}