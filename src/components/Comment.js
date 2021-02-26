import React from 'react'
import { Card } from 'react-bootstrap'
const Comment = ({ commentData }) => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Title : {commentData.name}</Card.Title>
                    <Card.Text>
                        {commentData.body}
                    </Card.Text>
                    <Card.Link href="#">{commentData.email}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Comment
