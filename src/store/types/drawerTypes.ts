import { Admin } from '@services/types/adminTypes'
import { Teacher } from '@services/types/teacherTypes'

interface DrawerInitialState {
	open: boolean
	data?: Admin | Teacher
	type: 'teacher' | 'student' | 'group' | 'admin' | 'direction'
	entity: 'create' | 'update'
}

export default DrawerInitialState