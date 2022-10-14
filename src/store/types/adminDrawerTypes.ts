import { Admin } from '@services/types/adminTypes'

interface AdminDrawerInitialState {
	open: boolean
	data?: Admin
	type: 'teacher' | 'student' | 'group' | 'admin' | 'direction'
	entity: 'create' | 'update'
}

export default AdminDrawerInitialState