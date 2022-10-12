import { Admin } from '@services/types/adminResponseTypes'

interface AdminDrawerInitialState {
	open: boolean
	data?: Admin
	type: 'teacher' | 'student' | 'group' | 'admin' | 'direction'
	entity: 'create' | 'update'
}

export default AdminDrawerInitialState