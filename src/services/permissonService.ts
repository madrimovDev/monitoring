import api from '@api'

class PermissonService {
	static async get() {
		const response = api.get<{ message: string, permissions: string[] }>('/permissions')
		return response
	}
}

export default PermissonService