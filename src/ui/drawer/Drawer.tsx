import React from 'react'
import { Drawer as AntDrawer } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { closeDrawer } from '@store/actions'

const Drawer = () => {
	const { open } = useAppSelector(state => state.adminDrawer)
	const dispatch = useAppDispatch()

	const onClose = () => dispatch(closeDrawer())

	return (
		<AntDrawer width={500} onClose={onClose} open={open}>

		</AntDrawer>
	)
}

export default Drawer