import { InitialState } from '@store/types/types'
import { Admin } from '@services/types/adminTypes'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { createAdmin, deleteAdmin, getAllAdmins, updateAdmin } from '@store/actions/adminsActions'

const initialState: InitialState<Admin[] | null> = {
	status: 'DEFAULT',
	data: null,
	message: '',
	error: false,
	errorMessage: null
}

const adminReducer = createReducer(initialState, builder => {
	builder
	.addCase(createAdmin.pending, ( state ) => {
		state.status = 'PENDING'
		state.error = false
	})
	.addCase(createAdmin.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = state.data ? [...state.data, action.payload.admin] : [action.payload.admin]
		state.message = action.payload.message
		state.error = false
		state.errorMessage = null
	})
	.addCase(createAdmin.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.error = true
		state.message = ''
		state.errorMessage = {
			message: action?.payload?.message,
			status: action?.payload?.status
		}
	})
	.addCase(getAllAdmins.pending, ( state ) => {
		state.status = 'PENDING'
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
		state.status = 'PENDING'
	})
	.addCase(updateAdmin.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.message = action.payload.message
		state.error = false
		state.errorMessage = null
		state.data = state.data?.map(admin => {
			if (admin.id === action.payload.admin.id) {
				return {
					...action.payload.admin
				}
			}
			return admin
		}) || [action.payload.admin]
	})
	.addCase(updateAdmin.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.message = ''
		state.error = true
		state.errorMessage = {
			status: action.payload.status,
			message: action.payload.message
		}
	})
	.addCase(deleteAdmin.pending, ( state ) => {
		state.status = 'PENDING'
	})
	.addCase(deleteAdmin.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.message = action.payload.message
		state.error = false
		state.errorMessage = null
		state.data = state.data?.filter(admin => admin.id !== action.payload.admin.id) || []
	})
	.addCase(deleteAdmin.rejected, ( state, action ) => {
		state.status = 'REJECTED'
		console.log(action.payload)
	})
})

export default adminReducer