import React, { useEffect, useState } from 'react'
import s from '../../../assets/css/home.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4200/api/blog/getAll')
        setPosts(response.data) 
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts() 
  }, []) 

  return (
    <div className={s.hero}>
      <div className={s.hero__container}>
        <h1>Posts:</h1>
    
        <div>
          {posts.map((post) => (
            <div key={post._id} className={s.post}>
              <h2>{post.title}</h2>
              <p>{post.content}</p> 
            </div>
          ))}
        </div>
      </div>
	  <Link to='addPost' className='button-primary'>Add blog post</Link>
    </div>
  )
}

export default App
