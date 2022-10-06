import AdminDrawerInitialState from '@store/types/adminDrawerTypes'
import { createReducer } from '@reduxjs/toolkit'
import { closeDrawer, openDrawer, openWithPayload } from '@store/actions'

const initialState: AdminDrawerInitialState = {
	open: false
}

const adminDrawerReducer = createReducer(initialState, builder => {
	builder
	.addCase(openDrawer, ( state ) => {
		state.open = true
	})
	.addCase(closeDrawer, ( state ) => {
		state.open = false
	})
	.addCase(openWithPayload, ( state, action ) => {
		state.open = true
		state.data = action.payload
	})
})

export default adminDrawerReducer