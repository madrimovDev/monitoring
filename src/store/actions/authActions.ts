import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '@services'
import { authResponseMapper, responseErrorMapper } from '@mapper'
import { AxiosError } from 'axios'
import { LoginUserType } from '@services/types/authType'

export const loginAction = createAsyncThunk('auth/login', async ( user: LoginUserType, { rejectWithValue } ) => {
	try {
		const result = await AuthService.login(user)
		return authResponseMapper(result.data)
	} catch (err) {
		throw rejectWithValue(responseErrorMapper(err as AxiosError<{ message: string }>))
	}
})

export const verifyAction = createAsyncThunk('auth/verify', async ( _, { rejectWithValue } ) => {
	try {
		const result = await AuthService.verify()
		return authResponseMapper(result.data)
	} catch (err) {
		throw rejectWithValue(responseErrorMapper(err as AxiosError<{ message: string }>))
	}
})

export const logoutAction = createAction('auth/logout')