import React from 'react'
import { Drawer as AntDrawer } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { closeDrawer } from '@store/actions'
import CreateUserForm from '@ui/form/CreateUserForm'
import { drawer } from '@store/selectors/selectors'

const Drawer = () => {
	const { open, type, entity } = useAppSelector(drawer)
	const dispatch = useAppDispatch()

	const onClose = () => dispatch(closeDrawer())

	return (
		<AntDrawer title={`${entity} ${type}`} headerStyle={{ textTransform: 'capitalize' }} width={500} onClose={onClose}
							 open={open}>
			<CreateUserForm />
		</AntDrawer>
	)
}

export default Drawer