import api from '@api'

class GroupService {
	private static base = '/groups'

	static async getAll() {
		return await api.get(this.base)
	}
}

export default GroupService
