import { createAction } from '@reduxjs/toolkit'

export const openDrawer = createAction('adminDrawer/open')
export const closeDrawer = createAction('adminDrawer/close')
export const openWithPayload = createAction('adminDrawer/openWithPaylaod', ( data: any ) => {
	return {
		payload: data
	}
})