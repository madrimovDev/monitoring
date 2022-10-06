import AuthInitialStateType from '../types/authTypes'
import { createReducer } from '@reduxjs/toolkit'
import { loginAction, logoutAction } from '../actions'
import { verifyAction } from '../actions'

const initialState: AuthInitialStateType = {
	status: 'DEFAULT',
	data: null
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
		state.error = action.error.message
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
		state.error = action.error.message
	})
	.addCase(logoutAction, ( state, action ) => {
		state.status = 'DEFAULT',
			state.data = null,
			state.error = ''
	})
})

export default authReducer