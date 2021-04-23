import React, { Component } from 'react'
import { Form, Button, Card, Container } from "react-bootstrap"
import axios from 'axios'
import { Link } from 'react-router-dom'

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            _id: '',
            name: '',
            email: '',
            password: '',
            age: '',
            address: '',
            location: '',
            profession: '',
            health: '',
            phone: ''
        }


    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {

        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:3001/api/phi/register', this.state)
            .then(response => {
                console.log(response);
                this.props.history.push("/home")
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { name, email, password, _id, age, address, location, profession, health, phone } = this.state
        return (
            <>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Sign Up</h2>


                                <Form onSubmit={this.submitHandler}>
                                    <Form.Group id="_id">
                                        <Form.Label>National ID</Form.Label>
                                        <Form.Control type="text" name="_id" value={_id} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" value={name} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" value={email} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" value={password} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="age">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" name="age" value={age} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name="address" value={address} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="location">
                                        <Form.Label>Current Location</Form.Label>
                                        <Form.Control type="text" name="location" value={location} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="profession">
                                        <Form.Label>Profession</Form.Label>
                                        <Form.Control type="text" name="profession" value={profession} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="health">
                                        <Form.Label>Health Status</Form.Label>
                                        <Form.Control type="text" name="health" value={health} required onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group id="phone">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" name="phone" value={phone} required onChange={this.changeHandler} />
                                    </Form.Group>

                                    <Button type="submit" className="w-100"  >
                                        Sign Up
            </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            Already have an account?<Link to="/login">Log In</Link>
                        </div>
                    </div></Container>
            </>
        )
    }
}

export default (SignUp)
