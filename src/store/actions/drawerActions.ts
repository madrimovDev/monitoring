import { createAction } from '@reduxjs/toolkit'
import { Admin } from '@services/types/adminTypes'
import { Teacher } from '@services/types/teacherTypes'

interface DrawerActionPayload {
	type: 'teacher' | 'student' | 'direction' | 'admin' | 'group'
	entity: 'create' | 'update'
	data?: Admin | Teacher
}

export const openDrawer = createAction('adminDrawer/open', ( { type, entity, data }: DrawerActionPayload ) => {
	return {
		payload: {
			type,
			entity,
			data
		}
	}
})
export const closeDrawer = createAction('adminDrawer/close')