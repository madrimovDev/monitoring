import { IAdmin, ITeacher } from '@store/types/permissionsType'

interface AdminDrawerInitialState {
	open: boolean
	data?: ITeacher | IAdmin | null
	type: 'teacher' | 'student' | 'group' | 'admin' | 'direction'
	entity: 'create' | 'update'
}

export default AdminDrawerInitialState