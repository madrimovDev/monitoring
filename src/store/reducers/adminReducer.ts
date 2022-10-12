import { InitialState } from '@store/types/types'
import { IAdminResponse } from '@services/types/adminResponseTypes'
import { createReducer } from '@reduxjs/toolkit'
import { createAdmin } from '@store/actions/adminsActions'

const initialState: InitialState<IAdminResponse[]> = {
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
		state.data = state.data ? [...state.data, action.payload] : [action.payload]
	})
	.addCase(createAdmin.rejected, ( state, action ) => {
		state.status = 'REJECTED'
		console.log(action.payload)
	})
})

export default adminReducer