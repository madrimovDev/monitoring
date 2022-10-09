interface AdminDrawerInitialState {
	open: boolean
	data?: any
	type: 'teacher' | 'student' | 'group' | 'admin' | 'direction'
	entity: 'create' | 'update'
}

export default AdminDrawerInitialState