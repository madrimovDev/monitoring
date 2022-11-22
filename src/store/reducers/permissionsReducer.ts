import { InitialState } from '@store/types/types'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { getPermissions } from '@store/actions'
import { PermissionsResponseType } from '@services/types/permissionsTypes'
import { errorHandler } from '@utils'

const initialState: InitialState<PermissionsResponseType | null> = {
	status: 'DEFAULT',
	data: null,
	response: {
		error: false,
		errorMessage: '',
	},
}

const permissionsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getPermissions.pending, (state) => {
			state.status = 'PENDING'
			state.response = errorHandler(false)
		})
		.addCase(getPermissions.fulfilled, (state, action) => {
			state.status = 'FULFILLED'
			state.data = action.payload
			state.response = errorHandler(false)
		})
		.addCase(
			getPermissions.rejected,
			(state, action: PayloadAction<any, any>) => {
				state.status = 'REJECTED'
				state.response = errorHandler(true, action.payload.message)
			}
		)
})

export default permissionsReducer
