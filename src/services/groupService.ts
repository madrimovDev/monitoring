import { GroupsResponse, GroupResponse } from './types/groupsTypes'
import api from '@api'

class GroupService {
	private static base = '/groups'

	static async getAll() {
		return await api.get<GroupsResponse>(this.base)
	}

	static async getById(id: number) {
		return await api.get<GroupResponse>(`${this.base}/${id}`)
	}

	static async create() {
		return await api.post(this.base)
	}
}

export default GroupService
