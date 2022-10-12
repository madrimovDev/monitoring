import React from 'react'
import { Button, Checkbox, CheckboxOptionType, Divider, Form, Input, Space } from 'antd'
import { permissions } from '@store'

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
	const onFinish = ( data: any ) => {
		console.log(data)
	}
	return (
		<Form form={form} onFinish={onFinish} layout={'vertical'} fields={[
			{
				name: 'permissions',
				value: ['admins', 'teachers']
			}
		]}>
			<Item label={'Username'} name={'username'}>
				<Input />
			</Item>
			<Item label={'Password'} name={'password'}>
				<Input />
			</Item>
			<Item label={'Name'} name={'name'}>
				<Input />
			</Item>
			<Divider children={'Permissions'} />
			<Item name={'permissions'}>
				<Checkbox.Group options={options} />
			</Item>
			<Divider />
			<Item>
				<Space>
					<Button htmlType={'submit'} type={'primary'}>Create</Button>
					<Button danger htmlType={'reset'}>Reset</Button>
				</Space>
			</Item>
		</Form>
	)
}

export default AdminCreateForm