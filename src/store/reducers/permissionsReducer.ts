import { InitialState } from '@store/types/types'
import { createReducer } from '@reduxjs/toolkit'
import { getPermissions } from '@store/actions'
import { PermissionsResponseType } from '@services/types/permissionsTypes'

const initialState: InitialState<PermissionsResponseType | null> = {
	status: 'DEFAULT',
	data: null
}

const permissionsReducer = createReducer(initialState, builder => {
	builder
	.addCase(getPermissions.pending, ( state ) => {
		state.status = 'PENDING'
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
