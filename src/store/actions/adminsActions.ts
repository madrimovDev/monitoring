import { createAsyncThunk } from '@reduxjs/toolkit'
import { AdminService } from '@services'
import { responseErrorMapper } from '@mapper'
import { AxiosError } from 'axios'
import { Admin } from '@services/types/adminTypes'

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

export const updateAdmin = createAsyncThunk('admin/update', async ( {
																																			admin,
																																			id
																																		}: { admin: Admin, id: number }, { rejectWithValue } ) => {
	try {
		const result = await AdminService.update(admin, id)
		return result.data
	} catch (err) {
		throw rejectWithValue(responseErrorMapper(err as AxiosError<{ message: string }>))
	}
})

export const deleteAdmin = createAsyncThunk('admin/delete', async ( id: number, { rejectWithValue } ) => {
	try {
		const result = await AdminService.del(id)
		return result.data
	} catch (err) {
		throw rejectWithValue(responseErrorMapper(err as AxiosError<{ message: string }>))
	}
})