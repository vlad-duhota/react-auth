import React, { useState } from 'react'
import { useAuth } from '../../../providers/AuthProvider'
import Auth from '../Auth/Auth'
import s from '../../../assets/css/home.module.css'

const Home = () => {
	const { user } = useAuth()

	return user ? (
		<div className={s.hero}>
			<div className={s.hero__container}>
				<h1 className=''>Home page</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam numquam, officiis nulla debitis sapiente. Unde minus, ullam perferendis ipsa nam beatae consequatur similique cumque esse qui laborum, accusantium iure!</p>
			</div>
		</div>
	) : (
		<Auth />
	)
}

export default Home
