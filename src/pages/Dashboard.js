import React from 'react'
import Post from "./../components/Post";
import Comment from './../components/Comment'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { baseURL } from '../common/constant';
// import { useNavigation } from '@react-navigation/native';

function Dashboard() {
    const [commentsList, commentsHandler] = useState([])
    const postId = 1;
    const history = useHistory();
    //   const handleClick = () => history.push('/dashboard');
    const location = useLocation();
    const post = location.state.data[0];
    const user = location.state.data[1];
    console.log(location.state.data)
    useEffect(() => {
        const getCommentsList = async () => {
            const comments = await fetchComments()
            commentsHandler(comments)

        }
        getCommentsList()
    }, [])

    const fetchComments = async () => {
        const res = await axios(`${baseURL}comments`)
        return res.data;
    }
    const mapComments = (data) => {
        let postComment
        if (data) {
            postComment = commentsList.find((comment) => comment.postId === post.id)
        }
        return <Comment key={data.id} commentData={postComment} />
    }

    return (
        <div>
            <h1>Dashboard
             </h1>

            <Post key={post.id} post={post} user={user} />
            {commentsList.slice(0, 5).map((res) => { return mapComments(res) })}
            <Button variant="secondary" size="sm" onClick={() => history.goBack()}>
                Back
    </Button>
        </div>
    )
}

export default Dashboard
