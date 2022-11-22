import api from '@api'
import {
	NewTeacher,
	TeacherResponse,
	TeachersResponse,
} from '@services/types/teacherTypes'
import { GroupsResponse } from '@services/types/groupsTypes'
import {
	DirectionResponse,
	DirectionsResponse,
} from '@services/types/directionsTypes'

class TeacherService {
	private static base = '/teachers'

	static async getAll() {
		return await api.get<TeachersResponse>(this.base)
	}

	static async create(teacher: NewTeacher) {
		return await api.post<TeacherResponse>(this.base, teacher)
	}

	static async update(id: number, teacher: NewTeacher) {
		return await api.put<TeacherResponse>(`${this.base}/${id}`, teacher)
	}

	static async del(id: number) {
		return await api.delete<TeacherResponse>(`${this.base}/${id}`)
	}

	static async getGroups(id: number) {
		return await api.get<GroupsResponse>(`${this.base}/${id}/groups`)
	}

	static async getDirections(id: number) {
		return await api.get<DirectionsResponse>(`${this.base}/${id}/directions`)
	}

	static async addDirection(id: number, directionId: number) {
		return await api.post<DirectionResponse>(`${this.base}/${id}/directions`, {
			directionId,
		})
	}
}

export default TeacherService
