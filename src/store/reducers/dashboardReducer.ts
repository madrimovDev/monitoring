import { InitialState } from '@store/types/types'
import { createReducer } from '@reduxjs/toolkit'
import { getDashboard } from '@store/actions'
import { DashboardResponseType } from '@services/types/dashboardTypes'
import { errorHandler } from '@utils'

const initialState: InitialState<DashboardResponseType | null> = {
	status: 'FULFILLED',
	data: null,
	response: {
		error: false,
		errorMessage: '',
	},
}

const dashboardReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getDashboard.pending, (state) => {
			state.status = 'PENDING'
			state.response = errorHandler(false)
		})
		.addCase(getDashboard.fulfilled, (state, action) => {
			state.status = 'FULFILLED'
			state.data = action.payload
			state.response = errorHandler(false)
		})
		.addCase(getDashboard.rejected, (state) => {
			state.status = 'REJECTED'
			state.response = errorHandler(true, 'error')
		})
})

export default dashboardReducer
