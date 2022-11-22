import { createAsyncThunk } from '@reduxjs/toolkit'
import { DirectionService } from '@services'
import { responseErrorMapper } from '@mapper'
import { AxiosError } from 'axios'
import { NewDirection } from '@services/types/directionsTypes'

export const getAllDirections = createAsyncThunk(
	'directions/getAll',
	async (_, { rejectWithValue }) => {
		try {
			const result = await DirectionService.getAll()
			return result.data
		} catch (e) {
			throw rejectWithValue(
				responseErrorMapper(e as AxiosError<{ message: string }>)
			)
		}
	}
)

export const createDirection = createAsyncThunk(
	'direction/create',
	async (direction: NewDirection, { rejectWithValue }) => {
		try {
			const result = await DirectionService.create(direction)
			return result.data
		} catch (e) {
			throw rejectWithValue(
				responseErrorMapper(e as AxiosError<{ message: string }>)
			)
		}
	}
)

type PayloadType = {
	id: number
	direction: NewDirection
}

export const updateDirection = createAsyncThunk(
	'direction/update',
	async (payload: PayloadType, { rejectWithValue }) => {
		try {
			const result = await DirectionService.update(
				payload.id,
				payload.direction
			)
			return result.data
		} catch (e) {
			throw rejectWithValue(
				responseErrorMapper(e as AxiosError<{ message: string }>)
			)
		}
	}
)

export const deleteDirection = createAsyncThunk(
	'direction/delete',
	async (id: number, { rejectWithValue }) => {
		try {
			const result = await DirectionService.del(id)
			return result.data
		} catch (e) {
			throw rejectWithValue(
				responseErrorMapper(e as AxiosError<{ message: string }>)
			)
		}
	}
)
