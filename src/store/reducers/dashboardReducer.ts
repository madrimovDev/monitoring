import { InitialState } from '@store/types/types'
import { createReducer } from '@reduxjs/toolkit'
import { getDashboard } from '@store/actions'
import { DashboardResponseType } from '@services/types/dashboardTypes'

const initialState: InitialState<DashboardResponseType> = {
	status: 'FULFILLED',
	message: '',
	errorMessage: null,
	error: false,
	data: {
		students: 500,
		groups: 50,
		teachers: 5,
		admins: 4,
		directions: [
			{
				name: 'frontend',
				groups: 5,
				students: 100,
				teachers: 2
			},
			{
				name: 'nodejs',
				groups: 5,
				students: 100,
				teachers: 2
			},
			{
				name: 'android',
				groups: 5,
				students: 100,
				teachers: 2
			},
			{
				name: 'pyhton',
				groups: 5,
				students: 100,
				teachers: 2
			},
			{
				name: 'web kids',
				groups: 5,
				students: 100,
				teachers: 2
			}
		]
	}
}

const dashboardReducer = createReducer(initialState, builder => {
	builder.addCase(getDashboard.pending, ( state ) => {
		state.status = 'PENDING'
	})
	.addCase(getDashboard.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = action.payload
	})
	.addCase(getDashboard.rejected, ( state ) => {
		state.status = 'REJECTED'
	})
})

export default dashboardReducer