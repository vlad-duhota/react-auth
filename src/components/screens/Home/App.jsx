import React, { useState } from 'react'
import { useAuth } from '../../../providers/AuthProvider'

import Auth from '../Auth/Auth'
import Home from  './Home'
import AddPost from './AddPost'
import Post from './Post'

import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Home />,
	},
	{
		path: "/addPost",
		element: <AddPost />,
	},
	{
		path: "/post/:id",
		element: <Post />,
	}
  ])

  

const App = () => {
	const { user } = useAuth()

	return user ? (
		<RouterProvider router={router} />
	) : (
		<Auth />
	)
}

export default App
