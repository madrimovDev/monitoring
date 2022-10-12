import { createAsyncThunk } from '@reduxjs/toolkit'
import { AdminService } from '@services'
import { responseErrorMapper } from '@mapper'
import { AxiosError } from 'axios'
import { IAdmin, IAdmins, Admin } from '@services/types/adminResponseTypes'

export const getAllAdmins = createAsyncThunk('admin/getAll', async ( _, { rejectWithValue } ) => {
	try {
		const result = await AdminService.getAll()
		return result.data
	} catch (err) {
		throw rejectWithValue(responseErrorMapper(err as AxiosError<{ message: string }>))
	}
})

export const createAdmin = createAsyncThunk('admin/create', async ( admin: Admin, { rejectWithValue } ) => {
	try {
		const result = await AdminService.create(admin)
		return result.data
	} catch (err) {
		throw rejectWithValue(responseErrorMapper(err as AxiosError<{ message: string }>))
	}
})

