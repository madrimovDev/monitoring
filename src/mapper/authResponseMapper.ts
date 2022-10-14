import { AuthResponseType } from '@services/types/authType'

const authResponseMapper = ( user: AuthResponseType ) => {
	return {
		username: user.username,
		permissions: user.permissions
	}
}

export default authResponseMapper

export type UserMappedType = ReturnType<typeof authResponseMapper>
