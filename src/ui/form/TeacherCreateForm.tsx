import React, { useEffect } from 'react'
import { useAppSelector } from '@hook'
import { drawer } from '@store'
import { ConfigProvider, DatePicker, Divider, Form, Input } from 'antd'
import { fieldsData } from '@utils'

const { Item } = Form

const TeacherCreateForm = () => {
	const { data, open, entity } = useAppSelector(drawer)
	const [form] = Form.useForm()

	const fields = fieldsData(data)

	useEffect(() => {
		if (!open) {
			form.resetFields()
		}
	}, [open])

	return (
		<Form form={form} layout={'vertical'} fields={fields}>
			<Item label={'Username'} name={'username'} rules={[
				{
					required: true,
					min: 3
				}
			]}>
				<Input />
			</Item>
			<Item label={'Password'} name={'password'} rules={[
				{
					required: entity === 'create',
					min: 3
				}
			]}>
				<Input />
			</Item>
			<Divider children={'Teacher Date'} />
			<Item label={'Name'} name={'name'} rules={[
				{
					required: true,
					min: 3
				}
			]}>
				<Input />
			</Item>
			<Item label={'Surname'} name={'surname'} rules={[
				{
					required: true,
					min: 3
				}
			]}>
				<Input />
			</Item>
			<Item label={'Birthday'} name={'birthday'}>
				<ConfigProvider>
					<DatePicker defaultValue={}/>
				</ConfigProvider>
			</Item>
		</Form>
	)
}

export default TeacherCreateForm