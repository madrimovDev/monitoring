import React from 'react'
import { Drawer as AntDrawer } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { closeDrawer } from '@store/actions'
import { drawer } from '@store'
import AdminCreateForm from '@ui/form/AdminCreateForm'
import TeacherCreateForm from '@ui/form/TeacherCreateForm'

const Drawer = () => {
	const { open, type, entity } = useAppSelector(drawer)
	const dispatch = useAppDispatch()
	const onClose = () => dispatch(closeDrawer())

	return (
		<AntDrawer
			title={`${entity} ${type}`}
			headerStyle={{ textTransform: 'capitalize' }}
			width={500}
			onClose={onClose}
			open={open}>
			{type === 'admin' && <AdminCreateForm />}
			{type === 'teacher' && <TeacherCreateForm />}
		</AntDrawer>
	)
}

export default Drawer
