import ModalInitialState from '@store/types/modalTypes'
import { createReducer } from '@reduxjs/toolkit'
import { openModal } from '@store/actions/modalActions'

const initialState: ModalInitialState = {
	open: false,
	type: 'direction',
	entity: 'create'
}

const modalReducer = createReducer(initialState, builder => {
	builder.addCase(openModal, ( state, action ) => {
		state.open = true
		state.type = action.payload.type
		state.entity = action.payload.entity
		state.data = action.payload.data
	}).addCase(openModal, ( state ) => {
		state.open = false
		state.data = undefined
	})
})

export default modalReducer