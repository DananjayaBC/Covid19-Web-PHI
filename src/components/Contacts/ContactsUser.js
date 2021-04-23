import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Form } from "react-bootstrap"


function Search() {

    const [post, setPost] = useState('');
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    const [idFromButtonClick, setIdFromButtonClick] = useState('');

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/citizens/${idFromButtonClick}/contacts`)
            .then(res => {

                setPost(res.data);
                setError(null)

            })
            .catch(err => {
                setError("No Data")
            })
    }, [idFromButtonClick]);



    return (
        <div>
            <div className="card card-body mb-4 p-3">
                <h1 className="display-5 text-center">
                    <i className="fas fa-search"></i>Contact Details
         </h1>
                <p className="lead text-center">Get the Citizen Contact Details</p>
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
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center  ">
                        <div className="crd mb-4 shadow-sm">
                            <div className="card-body bg-light" key={post.id}>
                                <h6>Name : {post.name}</h6>
                                <p className="card-text" >
                                    <strong><i className="fas fa-time"></i></strong> Email: {post.email}
                                    <br />
                                    <strong><i className="fas fa-play"></i> Mobile Number - {post.phone} </strong>
                                    <br />
                                    <strong><i className="fas fa-play"></i> Address - {post.address} </strong>

                                    <br />
                                    <strong><i className="fas fa-play"></i> Location - {post.location} </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>


    )
}




export default Search;

