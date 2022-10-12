import { createAction } from '@reduxjs/toolkit'

interface DrawerActionPayload {
	type: 'teacher' | 'student' | 'direction' | 'admin' | 'group'
	entity: 'create' | 'update'
	data?: any
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
export const openWithPayload = createAction('adminDrawer/openWithPaylaod', ( data: any ) => {
	return {
		payload: data
	}
})