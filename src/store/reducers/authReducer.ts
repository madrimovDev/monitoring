import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { loginAction, logoutAction, verifyAction } from '../actions'
import { InitialState } from '@store/types/types'
import { UserMappedType } from '@mapper/authResponseMapper'
import { errorHandler } from '@utils'

const initialState: InitialState<UserMappedType | null> = {
	status: 'DEFAULT',
	data: null,
	response: {
		error: false,
		errorMessage: '',
	},
}

const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(loginAction.pending, (state) => {
			state.status = 'PENDING'
			state.response = errorHandler(false)
		})
		.addCase(loginAction.fulfilled, (state, action) => {
			state.status = 'FULFILLED'
			state.data = action.payload
			state.response = errorHandler(false)
		})
		.addCase(loginAction.rejected, (state, action: PayloadAction<any, any>) => {
			state.status = 'REJECTED'
			state.data = null
			state.response = errorHandler(true, action.payload.message)
		})
		.addCase(verifyAction.pending, (state) => {
			state.status = 'PENDING'
			state.response = errorHandler(false)
		})
		.addCase(verifyAction.fulfilled, (state, action) => {
			state.status = 'FULFILLED'
			state.data = action.payload
			state.response = errorHandler(false)
		})
		.addCase(
			verifyAction.rejected,
			(state, action: PayloadAction<any, any>) => {
				state.status = 'REJECTED'
				state.data = null
				state.response = errorHandler(true, action.payload.message)
			}
		)
		.addCase(logoutAction, (state) => {
			state.status = 'DEFAULT'
			state.data = null
			localStorage.removeItem('accessToken')
		})
})

export default authReducer
