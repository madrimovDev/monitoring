import { InitialState } from '@store/types/types'
import { createReducer } from '@reduxjs/toolkit'
import { getPermissions } from '@store/actions'

const initialState: InitialState<string[]> = {
	status: 'DEFAULT',
	data: []
}

const permissionsReducer = createReducer(initialState, builder => {
	builder
	.addCase(getPermissions.pending, ( state ) => {
		state.status = 'PENDNIG'
	})
	.addCase(getPermissions.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = action.payload
	})
	.addCase(getPermissions.rejected, ( state, action ) => {
		state.status = 'REJECTED'
		console.log(action.payload)
	})
})

export default permissionsReducer
