import React from 'react'
import { Modal as AntModal } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { modal } from '@store/selectors/selectors'
import { closeModal } from '@store/actions/modalActions'
import DirectionCreateForm from '@ui/form/DirectionCreateForm'

const Modal = () => {
	const { open, type, entity } = useAppSelector(modal)
	const dispatch = useAppDispatch()
	return (
		<AntModal style={{ textTransform: 'capitalize' }} title={`${entity} ${type}`} footer={null} open={open}
							onCancel={() => dispatch(closeModal())}>
			{type === 'direction' && <DirectionCreateForm />}
		</AntModal>
	)
}

export default Modal