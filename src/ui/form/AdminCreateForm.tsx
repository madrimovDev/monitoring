import { useAppDispatch, useAppSelector } from '@hook'
import { admins, drawer, permissions } from '@store'
import { createAdmin, updateAdmin } from '@store/actions/adminsActions'
import { fieldsData } from '@utils'
import { Button, Checkbox, Divider, Form, Input, notification } from 'antd'

import React, { useEffect, useState } from 'react'

const { Item } = Form

const AdminCreateForm = () => {
	const [form] = Form.useForm()
	const dispatch = useAppDispatch()

	const { open, data: drawerData, entity } = useAppSelector(drawer)
	const { data: permissionsData } = useAppSelector(permissions)
	const { status, response } = useAppSelector(admins)

	const [finished, setFinished] = useState<boolean>(false)

	const fields = fieldsData(drawerData)

	const onFinish = (formData: any) => {
		if (entity === 'create' && !drawerData) {
			dispatch(createAdmin(formData))
		} else {
			dispatch(
				updateAdmin({
					admin: {
						...formData,
						password: '',
					},
					id: drawerData?.id || 0,
				})
			)
		}
		setFinished(true)
	}

	useEffect(() => {
		if (status === 'REJECTED' && finished) {
			notification.error({
				message: response.errorMessage,
			})
			setFinished(false)
		} else if (status === 'FULFILLED' && finished) {
			notification.success({
				message: entity === 'create' ? 'admin created' : 'admin updated',
			})
			setFinished(false)
			form.resetFields()
		}
	}, [status])

	useEffect(() => {
		if (!open) {
			form.resetFields()
		}
		return () => {
			form.resetFields()
		}
	}, [open])

	return (
		<Form
			form={form}
			onFinish={onFinish}
			layout={'vertical'}
			fields={fields}>
			<Item
				rules={[
					{
						required: true,
						min: 3,
						message: 'Username is required',
					},
				]}
				label={'Username'}
				name={'username'}>
				<Input />
			</Item>
			<Item
				rules={[
					{
						required: entity === 'create',
						min: entity === 'create' ? 3 : undefined,
						message: 'Password is required',
					},
				]}
				label={'Password'}
				name={'password'}>
				<Input />
			</Item>
			<Item
				rules={[
					{
						required: true,
						min: 3,
						message: 'Name is required',
					},
				]}
				label={'Name'}
				name={'name'}>
				<Input />
			</Item>
			<Divider children={'Permissions'} />
			<Item
				rules={[
					{
						required: true,
						message: 'Permissions is required',
					},
				]}
				name={'permissions'}>
				<Checkbox.Group
					options={permissionsData?.permissions}
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						gap: 20,
					}}
				/>
			</Item>
			<Divider />
			<Item>
				<Button
					style={{ width: '100%' }}
					htmlType={'submit'}
					type={'primary'}
					size={'large'}>
					Create
				</Button>
			</Item>
		</Form>
	)
}

export default AdminCreateForm
