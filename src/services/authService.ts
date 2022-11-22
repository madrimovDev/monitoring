import api from '@api'
import { AuthResponseType, LoginUserType } from './types/authType'

class AuthService {
	static async login(user: LoginUserType) {
		const response = await api.post<AuthResponseType>('/auth/login', {
			username: user.username,
			password: user.password,
		})
		localStorage.setItem('accessToken', response.data.token)
		return response
	}

	static async verify() {
		const response = await api.get('/auth/verify', {
			headers: {
				Authorization: localStorage.getItem('accessToken'),
			},
		})
		return response
	}
}

export default AuthService
