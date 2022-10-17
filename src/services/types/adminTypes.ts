export interface Admin{
	id: number
	userId: number
	role: string
	username: string
	name: string
	permissions: string[]
}

interface AdminResponse {
	message: string
	admin: Admin
}

interface AdminsResponse {
	message: string
	admins: Admin[]
}