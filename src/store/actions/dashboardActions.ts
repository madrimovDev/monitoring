import { createAsyncThunk } from '@reduxjs/toolkit'
import { DashboardService } from '@services'
import { responseErrorMapper } from '@mapper'
import { AxiosError } from 'axios'

export const getDashboard = createAsyncThunk(
	'dashboard/fetch',
	async (_, { rejectWithValue }) => {
		try {
			const result = await DashboardService.get()
			return result.data
		} catch (err) {
			throw rejectWithValue(
				responseErrorMapper(err as AxiosError<{ message: string }>)
			)
		}
	}
)
