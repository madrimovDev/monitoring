import { InitialState } from '@store/types/types'
import { Admin } from '@services/types/adminResponseTypes'
import { createReducer } from '@reduxjs/toolkit'
import { createAdmin, getAllAdmins } from '@store/actions/adminsActions'

const initialState: InitialState<Admin[]> = {
	status: 'DEFAULT',
	data: null
}

const adminReducer = createReducer(initialState, builder => {
	builder
	.addCase(createAdmin.pending, ( state ) => {
		state.status = 'PENDNIG'
	})
	.addCase(createAdmin.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = state.data ? [...state.data, action.payload.admin] : [action.payload.admin]
	})
	.addCase(createAdmin.rejected, ( state, action ) => {
		state.status = 'REJECTED'
		console.log(action.payload)
	})
	.addCase(getAllAdmins.pending, ( state ) => {
		state.status = 'PENDNIG'
	})
	.addCase(getAllAdmins.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = action.payload.admins
	})
	.addCase(getAllAdmins.rejected, ( state, action ) => {
		state.status = 'REJECTED'
		console.log(action.payload)
	})
})

export default adminReducer