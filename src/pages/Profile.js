import React from 'react'
import { Container, Jumbotron, ListGroup } from 'react-bootstrap'
import { useHistory,useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'
function Profile() {
    const history = useHistory();
    const location = useLocation();
    const user=location.state.data[0]
    console.log(user)
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
                        <p>{user.username}</p>
                    </ListGroup.Item>
                    <ListGroup.Item className='justify-between'>
                        <p>Full Name</p>
                        <p>{user.name}</p>
                    </ListGroup.Item>
                    <ListGroup.Item className='justify-between'>
                        <p>Email</p>
                        <p>{user.email}</p>
                    </ListGroup.Item>
                    <ListGroup.Item className='justify-between'>
                        <p>Web Site</p>
                        <p>{user.website}</p>
                    </ListGroup.Item>
                    <ListGroup.Item className='justify-between'>
                        <p>Company Details</p>
                        <p>{user.company.name}</p>
                    </ListGroup.Item>
                </ListGroup>
            </Jumbotron>
        </div>
    )
}

export default Profile
