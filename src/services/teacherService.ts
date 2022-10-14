import api from '@api'

/*
 *     "username": "neowise",
 "password": "1234",
 "name": "Jalol",
 "surname": "Imomaddinov",
 "birthday": "08-09-1997",
 "phone": "99899565121"
 *
 * */

export interface Teacher {
	username: string
	password: string
	name: string
	surname: string,
	birthday: Date
	phone: string
	directions: string[]
}

class TeacherService {
	private static base = '/teachers'

	static async getAll() {
		const response = await api.get(this.base)
		return response
	}

	static async create( teacher: Teacher ) {
		const response = await api.post(this.base, teacher)
		return response
	}
}

export default TeacherService
