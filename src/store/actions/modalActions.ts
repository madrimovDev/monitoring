import { createAction } from '@reduxjs/toolkit'
import { Direction } from '@services/types/directionsTypes'

interface ModalActionPayload {
	type: 'direction'
	entity: 'create' | 'update'
	data?: Direction
}

export const openModal = createAction(
	'modal/open',
	(args: ModalActionPayload) => {
		return {
			payload: {
				...args,
			},
		}
	}
)

export const closeModal = createAction('modal/close')
