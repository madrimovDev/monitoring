import { createAsyncThunk } from '@reduxjs/toolkit'
import { TeacherService } from '@services'
import { NewTeacher } from '@services/types/teacherTypes'
import { responseErrorMapper } from '@mapper'
import { AxiosError } from 'axios'

export const getAllTeachers = createAsyncThunk('teachers/getAll', async ( _, { rejectWithValue } ) => {
	try {
		const result = await TeacherService.getAll()
		return result.data
	} catch (e) {
		throw rejectWithValue(responseErrorMapper(e as AxiosError<{ message: string }>))
	}
})

export const createTeacher = createAsyncThunk('teachers/create', async ( teacher: NewTeacher, { rejectWithValue } ) => {
	try {
		const result = await TeacherService.create(teacher)
		return result.data
	} catch (e) {
		throw rejectWithValue(responseErrorMapper(e as AxiosError<{ message: string }>))
	}
})