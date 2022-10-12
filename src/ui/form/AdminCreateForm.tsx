import React, { useEffect } from 'react'
import { Button, Checkbox, CheckboxOptionType, Divider, Form, Input } from 'antd'
import { closeDrawer, drawer, permissions } from '@store'
import { useAppDispatch, useAppSelector } from '@hook'
import fieldsData from '@utils/fieldsData'
import { createAdmin } from '@store/actions/adminsActions'

const { Item } = Form

const options: CheckboxOptionType[] = [
	{
		label: 'Admins',
		value: 'admins'
	},
	{
		label: 'Students',
		value: 'students'
	},
	{
		label: 'Groups',
		value: 'groups'
	},
	{
		label: 'Directions',
		value: 'directions'
	},
	{
		label: 'Users',
		value: 'users'
	},
	{
		label: 'Teachers',
		value: 'teachers'
	},
	{
		label: 'Dashboard',
		value: 'dashboard'
	}
]

const AdminCreateForm = () => {
	const [form] = Form.useForm()
	const dispatch = useAppDispatch()
	const { open, data } = useAppSelector(drawer)
	const { status, data: permissionsData } = useAppSelector(permissions)
	const fields = fieldsData(data)

	const onFinish = ( data: any ) => {
		dispatch(createAdmin(data))
	}

	useEffect(() => {
		if (!open) {
			form.resetFields()
		}
	}, [open])


	return (
		<Form form={form} onFinish={onFinish} layout={'vertical'} fields={fields}>
			<Item rules={[
				{
					required: true,
					min: 3,
					message: 'Username is required'
				}
			]} label={'Username'} name={'username'}>
				<Input />
			</Item>
			<Item rules={[
				{
					required: true,
					min: 3,
					message: 'Password is required'
				}
			]} label={'Password'} name={'password'}>
				<Input />
			</Item>
			<Item rules={[
				{
					required: true,
					min: 3,
					message: 'Name is required'
				}
			]} label={'Name'} name={'name'}>
				<Input />
			</Item>
			<Divider children={'Permissions'} />
			<Item rules={[
				{
					required: true,
					message: 'Permissions is required'
				}
			]} name={'permissions'}>
				<Checkbox.Group options={permissionsData?.permissions} style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 20
				}} />
			</Item>
			<Divider />
			<Item>
				<Button style={{ width: '100%' }} htmlType={'submit'} type={'primary'} size={'large'}>Create</Button>
			</Item>
		</Form>
	)
}

export default AdminCreateForm