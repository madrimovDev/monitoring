export interface Admin{
	id: number
	userId: number
	role: string
	username: string
	name: string
	permissions: string[]
}

interface IAdminResponse {
	message: string
}

export interface IAdmins extends IAdminResponse{
	admins: Admin[]
}

export interface IAdmin extends IAdminResponse{
	admin: Admin
}