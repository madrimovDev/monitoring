import { InitialState } from '@store/types/types'
import { Teacher } from '@services/types/teacherTypes'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { createTeacher, deleteTeacher, getAllTeachers } from '@store/actions'
import { errorHandler } from '@utils'

const initialState: InitialState<Teacher[] | null> = {
	status: 'DEFAULT',
	data: null,
	response: {
		error: false,
		errorMessage: ''
	}
}

const teachersReducer = createReducer(initialState, builder => {
	builder.addCase(getAllTeachers.pending, ( state ) => {
		state.status = 'PENDING'
		state.response = errorHandler(false)
	}).addCase(getAllTeachers.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = action.payload.teachers
		state.response = errorHandler(false)
	}).addCase(getAllTeachers.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.response = errorHandler(true, action.payload.message)
	}).addCase(createTeacher.pending, ( state ) => {
		state.status = 'PENDING'
		state.response = errorHandler(false)
	}).addCase(createTeacher.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = state.data ? [...state.data, action.payload.teacher] : [action.payload.teacher]
		state.response = errorHandler(false)
	}).addCase(createTeacher.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.response = errorHandler(true, action.payload.message)
	}).addCase(deleteTeacher.pending, ( state ) => {
		state.status = 'PENDING'
		state.response = errorHandler(false)
	}).addCase(deleteTeacher.fulfilled, ( state, action ) => {
		state.status = 'FULFILLED'
		state.data = state.data?.filter(teacher => {
			if (teacher.id !== action.payload.teacher.id) {
				return teacher
			}
		}) || []
		state.response = errorHandler(false)
	}).addCase(deleteTeacher.rejected, ( state, action: PayloadAction<any, any> ) => {
		state.status = 'REJECTED'
		state.response = errorHandler(true, action.payload.message)
	})
})

export default teachersReducer
