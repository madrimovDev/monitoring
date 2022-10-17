import api from '@api'
import { Admin, AdminResponse, AdminsResponse } from '@services/types/adminTypes'

class AdminService {
	private static base = '/admins'

	static async getAll() {
		const response = await api.get<AdminsResponse>(this.base)
		return response
	}


	static async create( admin: Admin ) {
		const response = await api.post<AdminResponse>(this.base, admin)
		return response
	}

	static async update( admin: Admin, id: number ) {
		const response = await api.put<AdminsResponse>(`${this.base}/${id}`, admin)
		return response
	}

	static async del(id: number){
		const response = await api.delete<AdminResponse>(`${this.base}/${id}`)
		return response
	}
}

export default AdminService