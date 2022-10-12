import api from '@api'
import { IAdmin, IAdminResponse } from '@services/types/adminResponseTypes'

class AdminService {
	private static base = '/admins'

	static async getAll() {
		const response = await api.get<IAdminResponse[]>(this.base)
		return response
	}

	static async getById( id: number ) {
		const response = await api.get<IAdminResponse>(`${this.base}/${id}`)
		return response
	}

	static async create( admin: IAdmin ) {
		const response = await api.post<IAdminResponse>(this.base, admin)
		return response
	}

	static async update( admin: IAdmin, id: number ) {
		const response = await api.put(`${this.base}/${id}`, admin)
		return response
	}

	static async del(id: number){
		const response = await api.delete(`${this.base}/${id}`)
		return response
	}
}

export default AdminService