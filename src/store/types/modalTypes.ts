import { Direction } from '@services/types/directionsTypes'

interface ModalInitialState {
	open: boolean
	type: 'direction'
	entity: 'create' | 'update'
	data?: Direction
}

export default ModalInitialState
