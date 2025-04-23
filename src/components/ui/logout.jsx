// inside any component
import { useAuth } from '../../providers/AuthProvider'
import { AuthService } from '../../services/auth.service'

const Logout = () => {
	const { setUser } = useAuth()

	const handleLogout = () => {
		AuthService.logout()
		setUser(null)
	}

	return <button className='button-primary' onClick={handleLogout}>Logout</button>
}
