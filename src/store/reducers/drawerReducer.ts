import AdminDrawerInitialState from '@store/types/adminDrawerTypes'
import { createReducer } from '@reduxjs/toolkit'
import { closeDrawer, openDrawer } from '@store/actions'

const initialState: AdminDrawerInitialState = {
	open: false,
	type: 'admin',
	entity: 'create',
	data: null
}

const drawerReducer = createReducer(initialState, builder => {
	builder
	.addCase(openDrawer, ( state, action ) => {
		state.open = true
		state.type = action.payload.type
		state.entity = action.payload.entity
		state.data = action.payload.data || null
	})
	.addCase(closeDrawer, ( state ) => {
		state.open = false
		state.data = null
	})
})

export default drawerReducer