import React from 'react'
import Post from '../components/Post'
import { Jumbotron } from 'react-bootstrap'
const Home = ({ allData }) => {
  const mapPost = (post) => {
    let userData;
    if (allData.userList) {
      userData = allData.userList.find((res) => res.id === post.userId)
    }
    return <Post key={post.id} post={post} user={userData} />
  }
  return (
    <div>
      <h1> Todays Posts</h1>
      <Jumbotron>
        {allData.postsList.slice(0, 5).map((post) => {
          return mapPost(post)
        })}
      </Jumbotron>
        { 0 && 'text'}
    </div>
    
  )
}

export default Home
