import api from '@api'
import { PermissionsResponseType } from './types/permissionsTypes'

class PermissionService {
	static async get() {
		const response = api.get<PermissionsResponseType>('/permissions')
		return response
	}
}

export default PermissionService
