// import { createContext } from 'react'
// import { useState } from 'react'
// import { useContext } from 'react'

// const AuthContext = createContext({ user: null })

// export const AuthProvider = ({ children }) => {
// 	const [user, setUser] = useState(null)

// 	return (
// 		<AuthContext.Provider value={{ user, setUser }}>
// 			{children}
// 		</AuthContext.Provider>
// 	)
// }

// export const useAuth = () => useContext(AuthContext)

// authProvider.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import { AuthService, setAuthHeader } from '../services/auth.service'

const AuthContext = createContext({ user: null })

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			setAuthHeader(token)

			// Fetch profile to get user data
			AuthService.getProfile()
				.then(({ data }) => setUser(data.user))
				.catch(() => {
					AuthService.logout()
					setUser(null)
				})
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
