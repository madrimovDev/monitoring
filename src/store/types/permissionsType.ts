interface IUser {
	id: string
	username: string
	password: string
}

export interface IAdmin extends IUser{
	name: string
	permissions: string[]
}

export interface ITeacher extends IUser {
	name: string
	permissions: string[]
	directions: {
		id: number
		name: string
	}
}