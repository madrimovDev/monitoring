import { createAsyncThunk } from '@reduxjs/toolkit'
import { TeacherService } from '@services'

export const getAllTeachers = createAsyncThunk('teachers/getAll', async ( _, { rejectWithValue } ) => {
	try {
		const result = await TeacherService.getAll()
		return result.data
	}
	catch (e) {
		throw rejectWithValue(e as unknown)
	}
})