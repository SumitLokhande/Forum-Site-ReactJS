import React from 'react'
import { Container, Jumbotron, ListGroup } from 'react-bootstrap'
import { useHistory,useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'
function Profile() {
    const history = useHistory();
    const location = useLocation();
    console.log(location.state.data)

    return (
        <div>
            <Button variant="secondary" size="sm" onClick={() => history.goBack()}>
                Back
    </Button>
            <h1>Profile</h1>
            <Jumbotron fluid>
                <ListGroup variant="flush">
                    <ListGroup.Item className='justify-between'>
                        <p>User Name</p>
                        <p>abc</p>
                    </ListGroup.Item>
                    <ListGroup.Item>Full Name</ListGroup.Item>
                    <ListGroup.Item>Email</ListGroup.Item>
                    <ListGroup.Item>Web Site</ListGroup.Item>
                    <ListGroup.Item>Company Details</ListGroup.Item>
                </ListGroup>
            </Jumbotron>
        </div>
    )
}

export default Profile
