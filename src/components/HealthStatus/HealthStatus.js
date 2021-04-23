import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap"
import axios from 'axios'


class HealthStatus extends Component {


    constructor(props) {
        super(props)

        this.state = {
            health: ''
        }
    }
    state = {
        selectValue1: '',
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    changeHandler1 = e => {
        this.setState({ selectValue1: e.target.value })
    }
    submitHandler = e => {

        e.preventDefault()
        console.log(this.state);
        axios.put(`http://localhost:3001/api/citizens/${this.state.selectValue1}`, this.state)
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { health } = this.state

        return (

            <div>
                <div className="card card-body mb-4 p-3">
                    <h1 className="display-5 text-center">
                        <i className="fas fa-search"></i>Update
          </h1>
                    <p className="lead text-center">Update the Citizen Health Status</p>
                    <Form onSubmit={this.submitHandler}>
                        <Form.Group id="_id">
                            <Form.Label>National ID</Form.Label>
                            <Form.Control type="text" name="_id" value={this.state.selectValue1} required onChange={this.changeHandler1} />
                        </Form.Group>

                        <Form.Group id="health">
                            <Form.Label>Health Status</Form.Label>
                            <Form.Control type="text" name="health" value={health} required onChange={this.changeHandler} />
                        </Form.Group>

                        <Button type="submit" className="w-100"  >
                            Update
            </Button>
                    </Form>

                </div>

            </div>

        )
    }
}

export default (HealthStatus)
