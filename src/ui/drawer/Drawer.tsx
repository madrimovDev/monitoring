import React from 'react'
import { Drawer as AntDrawer } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { closeDrawer } from '@store/actions'
import CreateUserForm from '@ui/form/CreateUserForm'

const Drawer = () => {
	const { open } = useAppSelector(state => state.adminDrawer)
	const dispatch = useAppDispatch()

	const onClose = () => dispatch(closeDrawer())

	return (
		<AntDrawer title={'Create User'} width={500} onClose={onClose} open={open}>
			<CreateUserForm />
		</AntDrawer>
	)
}

export default Drawer