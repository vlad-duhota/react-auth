import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../providers/AuthProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import { toast,ToastContainer } from 'react-toastify'
import s from '../../../assets/css/login.module.css'
import { Link } from 'react-router-dom'

// import s from '../../../assets/css/home.module.css'

const AddPost = () => {
    const { user } = useAuth()
    const {register, handleSubmit} = useForm()
    const accessToken = localStorage.getItem('token')
    const navigate = useNavigate() 

    const onSubmit = async (data) => {
        try {

			const response = await axios.post(
				'http://localhost:4200/api/blog/create',
				{
					title: data.title,
					content: data.textarea,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`, 
					},
				}
			)

            navigate('/')
		} catch (error) {
            toast.error('Please fill every required field', {
                position: "bottom-right", 
                theme: 'dark'
            })
		}
    }

	return (
        <>
            <ToastContainer />
            <div className={s.addpost}>
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <Link to='/'>Go back</Link>
                    <input placeholder='Blog title' type="text" {...register('title')} />
                    <textarea placeholder='Blog content' {...register('textarea')}></textarea>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </>
    )
}

export default AddPost
