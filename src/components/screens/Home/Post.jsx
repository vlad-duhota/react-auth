import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useAuth } from '../../../providers/AuthProvider'
import axios from 'axios'

const Post = () => {
	const { user } = useAuth()
    const { id } = useParams()
    const [ post, setPost ] = useState([])
    const accessToken = localStorage.getItem('token')

    useEffect(() => {
        axios.get(
            'http://localhost:4200/api/blog/get/' + id,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`, 
                },
            }
        ).then(response => {
            if(response.data) {
                setPost(response.data)
            }
        })
    }, [])


	return (
        <div>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
        </div>
    )
}

export default Post
