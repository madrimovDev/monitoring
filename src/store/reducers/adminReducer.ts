import { InitialState } from '@store/types/types'
import { Admin } from '@services/types/adminResponseTypes'
import { createReducer } from '@reduxjs/toolkit'
import { createAdmin, deleteAdmin, getAllAdmins, updateAdmin } from '@store/actions/adminsActions'

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
	.addCase(updateAdmin.pending, ( state ) => {
		state.status = 'PENDNIG'
	})
	.addCase(updateAdmin.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = state.data?.map(admin => {
			if (admin.id === action.payload.admin.id) {
				return {
					...action.payload.admin
				}
			}
			return admin
		}) || [action.payload.admin]
	})
	.addCase(updateAdmin.rejected, ( state, action ) => {
		state.status = 'REJECTED'
		console.log(action.payload)
	})
	.addCase(deleteAdmin.pending, ( state ) => {
		state.status = 'PENDNIG'
	})
	.addCase(deleteAdmin.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = state.data?.filter(admin => admin.id !== action.payload.admin.id) || []
	})
		.addCase(deleteAdmin.rejected, (state, action) => {
			state.status = 'REJECTED'
			console.log(action.payload)
		})
})

export default adminReducer