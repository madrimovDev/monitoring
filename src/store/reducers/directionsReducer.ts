import { InitialState } from '@store/types/types'
import { Direction } from '@services/types/directionsTypes'
import { createReducer } from '@reduxjs/toolkit'
import { getAllDirections } from '@store/actions/directionsActions'
import { errorHandler } from '@utils'

const initialState: InitialState<Direction[] | null> = {
	status: 'DEFAULT',
	data: null,
	response: {
		error: false,
		errorMessage: ''
	}
}

const directionsReducer = createReducer(initialState, builder => {
	builder.addCase(getAllDirections.pending, (state) => {
		state.status = 'PENDING'
		state.response = errorHandler(false)
	}).addCase(getAllDirections.fulfilled, (state, action) => {
		state.status = 'FULFILLED'
		state.data = action.payload.directions
	})
})

export default directionsReducer