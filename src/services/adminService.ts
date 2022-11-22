import api from '@api'
import {
	Admin,
	AdminResponse,
	AdminsResponse,
} from '@services/types/adminTypes'

class AdminService {
	private static base = '/admins'

	static async getAll() {
		return await api.get<AdminsResponse>(this.base)
	}

	static async create(admin: Admin) {
		return await api.post<AdminResponse>(this.base, admin)
	}

	static async update(admin: Admin, id: number) {
		return await api.put<AdminResponse>(`${this.base}/${id}`, admin)
	}

	static async del(id: number) {
		return await api.delete<AdminResponse>(`${this.base}/${id}`)
	}
}

export default AdminService
