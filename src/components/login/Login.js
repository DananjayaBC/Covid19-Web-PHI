import React, { Component } from 'react'
import { Form, Button, Card, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }


    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {

        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:3001/api/phi/login', this.state)
            .then(response => {
                console.log(response);
                this.props.history.push("/home")
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const { email, password } = this.state
        return (
            <>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Log In</h2>

                                <Form onSubmit={this.submitHandler}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" value={email} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" value={password} required onChange={this.changeHandler} />
                                    </Form.Group>

                                    <Button className="w-100" type="submit">
                                        Log In
            </Button>
                                </Form>
                                <div className="w-100 text-center mt-3">
                                    <Link to="#">Forgot Password</Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            Need an account? <Link to="/">Sign Up</Link>
                        </div>
                    </div></Container>
            </>
        )
    }
}

export default Login
