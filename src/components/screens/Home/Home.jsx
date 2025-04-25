import React, { useEffect, useState } from 'react'
import s from '../../../assets/css/home.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logout from '../../ui/Logout'

const App = () => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get('http://localhost:4200/api/blog/getAll')
        const fetchedPosts = postResponse.data
        setPosts(fetchedPosts)

        const userRequests = fetchedPosts.map(post =>
          axios.get(`http://localhost:4200/api/auth/user/${post.userId}`)
        )

        const userResponses = await Promise.all(userRequests)
        const fetchedUsers = userResponses.map(res => res.data)
        setUsers(fetchedUsers)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])



  return (
    <div className={s.hero}>
      <div className={s.hero__container}>
        <h1>Posts:</h1>
        <div>
          {posts.map((post) => (
            <div key={post._id} className={s.post}>
              <Link viewTransition to={'post/' + post._id}>
              <h2>{post.title}</h2>
              </Link>
              
              <p>{post.content}</p>

              <small>Author: {users.find(u => u._id === post.userId)?.email}</small> 
            </div>
          ))}
        </div>
      </div>
      <Link viewTransition to='addPost' className='button-primary'>Add blog post</Link>
      <Logout />
    </div>
  )
}

export default App
