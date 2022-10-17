import { InitialState } from '@store/types/types'
import { Admin } from '@services/types/adminTypes'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { createAdmin, deleteAdmin, getAllAdmins, updateAdmin } from '@store/actions/adminsActions'
import { errorHandler } from '@utils'

const initialState: InitialState<Admin[] | null> = {
	status: 'DEFAULT',
	data: null,
	response: {
		error: false,
		errorMessage: ''
	}
}

const adminReducer = createReducer(initialState, builder => {
	builder
	.addCase(createAdmin.pending, ( state ) => {
		state.status = 'PENDING'
		state.response = errorHandler(false)
	})
	.addCase(createAdmin.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = state.data ? [...state.data, action.payload.admin] : [action.payload.admin]
		state.response = errorHandler(false)
	})
	.addCase(createAdmin.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.response = errorHandler(true, action.payload.message)
	})
	.addCase(getAllAdmins.pending, ( state ) => {
		state.status = 'PENDING'
		state.response = errorHandler(false)
	})
	.addCase(getAllAdmins.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = action.payload.admins
		state.response = errorHandler(false)
	})
	.addCase(getAllAdmins.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.response = errorHandler(true, action.payload.message)
	})
	.addCase(updateAdmin.pending, ( state ) => {
		state.status = 'PENDING'
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
		state.response = errorHandler(false)
	})
	.addCase(updateAdmin.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.response = errorHandler(true, action.payload.message)
	})
	.addCase(deleteAdmin.pending, ( state ) => {
		state.status = 'PENDING'
	})
	.addCase(deleteAdmin.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = state.data?.filter(admin => admin.id !== action.payload.admin.id) || []
		state.response = errorHandler(false)
	})
	.addCase(deleteAdmin.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.response = errorHandler(true, action.payload.message)
	})
})

export default adminReducer