import { createReducer } from '@reduxjs/toolkit'
import { loginAction, logoutAction, verifyAction } from '../actions'
import { InitialState } from '@store/types/types'
import { UserMappedType } from '@mapper/authResponseMapper'

const initialState: InitialState<UserMappedType | null> = {
	status: 'DEFAULT',
	data: null,
	message: '',
	errorMessage: null,
	error: false

}

const authReducer = createReducer(initialState, builder => {
	builder
	.addCase(loginAction.pending, ( state ) => {
		state.status = 'PENDING'
	})
	.addCase(loginAction.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = action.payload
	})
	.addCase(loginAction.rejected, ( state, action ) => {
		state.status = 'REJECTED'
		state.data = null
	}).addCase(verifyAction.pending, ( state ) => {
		state.status = 'PENDING'
	})
	.addCase(verifyAction.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = action.payload
	})
	.addCase(verifyAction.rejected, ( state, action ) => {
		state.status = 'REJECTED'
		state.data = null
	})
	.addCase(logoutAction, ( state, action ) => {
		state.status = 'DEFAULT'
		state.data = null
		localStorage.removeItem('accessToken')
	})
})

export default authReducer