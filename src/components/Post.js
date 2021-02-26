import React from 'react'
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom'
const Post = ({ post, user }) => {
    const history = useHistory();

    const handleClick = () => history.push('/dashboard', { data: [post, user] });
    const toProfile = () => history.push('/profile', { data: [user] });

    return (
        <div className='pointer-mark' onClick={handleClick}>
            <Card body>
                <div className='justify-between'>
                    <div>{post.title}</div>
                    <div onClick={toProfile}>{user.name}</div>
                </div>
            </Card>
        </div>
    )
}

export default Post
