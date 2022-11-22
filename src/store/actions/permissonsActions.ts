import { createAsyncThunk } from '@reduxjs/toolkit'
import { PermissionService } from '@services'
import { responseErrorMapper } from '@mapper'
import { AxiosError } from 'axios'

export const getPermissions = createAsyncThunk(
	'permissions/get',
	async (_, { rejectWithValue }) => {
		try {
			const result = await PermissionService.get()
			return result.data
		} catch (e) {
			throw rejectWithValue(
				responseErrorMapper(e as AxiosError<{ message: string }>)
			)
		}
	}
)
