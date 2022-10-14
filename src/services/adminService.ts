import api from '@api'
import { IAdmin, IAdmins, Admin } from '@services/types/adminTypes'

class AdminService {
	private static base = '/admins'

	static async getAll() {
		const response = await api.get<IAdmins>(this.base)
		return response
	}


	static async create( admin: Admin ) {
		const response = await api.post<IAdmin>(this.base, admin)
		return response
	}

	static async update( admin: Admin, id: number ) {
		const response = await api.put<IAdmin>(`${this.base}/${id}`, admin)
		return response
	}

	static async del(id: number){
		const response = await api.delete<IAdmin>(`${this.base}/${id}`)
		return response
	}
}

export default AdminService