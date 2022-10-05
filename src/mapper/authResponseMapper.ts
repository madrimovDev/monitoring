import { AuthResponseType } from '../services/types/authResponseType'

const authResponseMapper = ( user: AuthResponseType ) => {
	return {
		username: user.username,
		permissions: user.permissions
	}
}

export default authResponseMapper

export type UserMappedType = ReturnType<typeof authResponseMapper>
