import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Form } from "react-bootstrap"

function DeleteUser() {

    const [post, setPost] = useState('');
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    const [idFromButtonClick, setIdFromButtonClick] = useState('');

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.delete(`http://localhost:3001/api/citizens/${idFromButtonClick}`)
            .then(res => {

                
                setPost(res.data);
                setError(null)

            })
            .catch(err => {
                setError("No Result")
            })
    }, [idFromButtonClick]);



    return (

        <div>
            <div className="card card-body mb-4 p-3">
                <h1 className="display-5 text-center">
                    <i className="fas fa-search"></i>Delete
         </h1>
                <p className="lead text-center">Delete the Citizen Details</p>
                <form >
                    <div className="form-group">


                    </div>

                    <Form.Group id="_id">
                        <Form.Label>National ID</Form.Label>
                        <Form.Control type="text" value={id} onChange={e => setId(e.target.value)} />
                    </Form.Group>


                    <button className="btn btn-primary btn-lg btn-block mb-5" type="button" onClick={handleClick}>Search</button>
                </form>

            </div>
            <br />
            {error ? (<h1 className="text-center">{error}</h1>) : (
                <h1 className="text-center">{post}</h1>
            )}


        </div>


    )
}




export default DeleteUser;

