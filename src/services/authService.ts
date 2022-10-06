import api from '@api'
import { AuthResponseType } from './types/authResponseType'
import UserType from '@store/types/userType'

class AuthService {
	static async login( user: UserType ) {
		const response = await api.post<AuthResponseType>('/auth/login', {
			username: user.username,
			password: user.password
		})
		localStorage.setItem('accessToken', response.data.token)
		return response
	}

	static async verify() {
		const response = await api.get('/auth/verify', {
			headers: {
				Authorization: localStorage.getItem('accessToken')
			}
		})
		return response
	}
}

export default AuthService