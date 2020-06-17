//const { Component } = require("react")

import React, { Component } from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import swal2 from 'sweetalert2'
import './style.css'
import AuthenticationService from '../Services/AuthenticationService'
export default class LoginPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnLoginClick = this.handleOnLoginClick.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnLoginClick() {
        if (this.state.email === "oeoe@gmail.com" && this.state.password === "123") {
            AuthenticationService.storeSuccessfullLogIn(this.state.email,this.state.password)
            this.props.history.push(`/home/${this.state.email}`)
        } else {
            swal2.fire({
                title: 'Oops!',
                text: 'Login failed',
                icon: 'error'
            });
        }

    }



    render() {

        return (
            <div className="form">
                <br></br>
                <br></br>

                <Card body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name={"email"} value={this.state.email} onChange={this.handleOnChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name={"password"} value={this.state.password} onChange={this.handleOnChange} />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" onClick={this.handleOnLoginClick}>
                                Log in
                        </Button>
                        </div>

                    </Form>
                </Card>

            </div>
        );
    }

}

