export interface IAdmin{
	username: string
	password: string
	name: string
	permissions: string[]
}

export interface IAdminResponse extends IAdmin{
	id: number
}