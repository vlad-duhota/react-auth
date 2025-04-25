import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4200/api'
axios.defaults.headers = {
	'Content-Type': 'application/json',
}

export const AuthService = {
	async login(email, password) {
		const response = await axios.post('auth/login', { email, password })
		const token = response.data.accessToken
		localStorage.setItem('token', token)
		setAuthHeader(token)
		return response
	},

	async register(email, password) {
		const response = await axios.post('auth/register', { email, password })
		const token = response.data.accessToken
		localStorage.setItem('token', token)
		setAuthHeader(token)
		return response
	},

	logout() {
		localStorage.removeItem('token')
		delete axios.defaults.headers.Authorization
	},

	getProfile() {
		return axios.get('auth/profile')
	},
}

export function setAuthHeader(token) {
	axios.defaults.headers.Authorization = `Bearer ${token}`
}
