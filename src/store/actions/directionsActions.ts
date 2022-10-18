import { createAsyncThunk } from '@reduxjs/toolkit'
import { DirectionService } from '@services'
import { responseErrorMapper } from '@mapper'
import { AxiosError } from 'axios'

export const getAllDirections = createAsyncThunk('directions/getAll', async ( _, { rejectWithValue } ) => {
	try {
		const result = await DirectionService.getAll()
		return result.data
	} catch (e) {
		throw rejectWithValue(responseErrorMapper(e as AxiosError<{ message: string }>))
	}
})