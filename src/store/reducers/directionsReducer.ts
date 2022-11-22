import { InitialState } from '@store/types/types'
import { Direction } from '@services/types/directionsTypes'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { errorHandler } from '@utils'
import {
	createDirection,
	deleteDirection,
	getAllDirections,
	updateDirection,
} from '@store/actions'

const initialState: InitialState<Direction[] | null> = {
	status: 'DEFAULT',
	data: null,
	response: {
		error: false,
		errorMessage: '',
	},
}

const directionsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getAllDirections.pending, (state) => {
			state.status = 'PENDING'
			state.response = errorHandler(false)
		})
		.addCase(getAllDirections.fulfilled, (state, action) => {
			state.status = 'FULFILLED'
			state.data = action.payload.directions
			state.response = errorHandler(false)
		})
		.addCase(
			getAllDirections.rejected,
			(state, action: PayloadAction<any, any>) => {
				state.status = 'DEFAULT'
				state.response = errorHandler(true, action.payload.message)
			}
		)
		.addCase(createDirection.pending, (state) => {
			state.status = 'PENDING'
			state.response = errorHandler(false)
		})
		.addCase(createDirection.fulfilled, (state, action) => {
			state.status = 'FULFILLED'
			state.data = state.data
				? [...state.data, action.payload.direction]
				: [action.payload.direction]
			state.response = errorHandler(false)
		})
		.addCase(
			createDirection.rejected,
			(state, action: PayloadAction<any, any>) => {
				state.status = 'REJECTED'
				state.response = errorHandler(true, action.payload.message)
			}
		)
		.addCase(updateDirection.pending, (state) => {
			state.status = 'PENDING'
			state.response = errorHandler(false)
		})
		.addCase(updateDirection.fulfilled, (state, action) => {
			state.status = 'FULFILLED'
			state.data = state.data?.map((direction) => {
				if (direction.id === action.payload.direction.id) {
					return {
						...action.payload.direction,
					}
				}
				return direction
			}) || [action.payload.direction]
			state.response = errorHandler(false)
		})
		.addCase(
			updateDirection.rejected,
			(state, action: PayloadAction<any, any>) => {
				state.status = 'REJECTED'
				state.response = errorHandler(true, action.payload.message)
			}
		)
		.addCase(deleteDirection.pending, (state) => {
			state.status = 'PENDING'
			state.response = errorHandler(false)
		})
		.addCase(deleteDirection.fulfilled, (state, action) => {
			state.status = 'FULFILLED'
			state.data =
				state.data?.filter(
					(direction) => direction.id !== action.payload.direction.id
				) || []
			state.response = errorHandler(false)
		})
		.addCase(
			deleteDirection.rejected,
			(state, action: PayloadAction<any, any>) => {
				state.status = 'REJECTED'
				state.response = errorHandler(true, action.payload.message)
			}
		)
})

export default directionsReducer
