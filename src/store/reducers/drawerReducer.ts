import DrawerInitialState from '@store/types/drawerTypes'
import { createReducer } from '@reduxjs/toolkit'
import { closeDrawer, openDrawer } from '@store/actions'

const initialState: DrawerInitialState = {
	open: false,
	type: 'admin',
	entity: 'create',
	data: undefined
}

const drawerReducer = createReducer(initialState, builder => {
	builder
	.addCase(openDrawer, ( state, action ) => {
		state.open = true
		state.type = action.payload.type
		state.entity = action.payload.entity
		state.data = action.payload.data
	})
	.addCase(closeDrawer, ( state ) => {
		state.open = false
		state.data = undefined
	})
})

export default drawerReducer