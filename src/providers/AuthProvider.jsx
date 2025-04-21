import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const AuthContext = createContext({ user: null })

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
