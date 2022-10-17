import api from '@api'
import { ITeacher, ITeachers, NewTeacher } from '@services/types/teacherTypes'


class TeacherService {
	private static base = '/teachers'

	static async getAll() {
		return await api.get<ITeachers>(this.base)
	}

	static async create( teacher: NewTeacher ) {
		return await api.post<ITeacher>(this.base, teacher)
	}

	static async update( id: number, teacher: NewTeacher ) {
		return await api.put<ITeacher>(`${this.base}/${id}`, teacher)
	}

	static async del(id: number){
		return await api.delete<ITeacher>(`${this.base}/${id}`)
	}

	static async getGroups(id:number){
		return await api
	}
}

export default TeacherService
