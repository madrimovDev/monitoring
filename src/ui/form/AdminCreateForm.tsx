import React, { useEffect } from 'react'
import { Button, Checkbox, Divider, Form, Input } from 'antd'
import { drawer, permissions } from '@store'
import { useAppDispatch, useAppSelector } from '@hook'
import { fieldsData } from '@utils'
import { createAdmin, updateAdmin } from '@store/actions/adminsActions'

const { Item } = Form

const AdminCreateForm = () => {
	const [form] = Form.useForm()
	const dispatch = useAppDispatch()

	const { open, data: drawerData, entity } = useAppSelector(drawer)
	const { data: permissionsData } = useAppSelector(permissions)

	const fields = fieldsData(drawerData)

	const onFinish = (formData: any) => {
		if (entity === 'create' && !drawerData) {
			dispatch(createAdmin(formData))
		} else {
			dispatch(
				updateAdmin({
					admin: formData,
					id: drawerData?.id || 0,
				})
			)
		}
	}

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
