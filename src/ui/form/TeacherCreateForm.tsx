import React, { useEffect } from 'react'
import { useAppSelector } from '@hook'
import { drawer } from '@store'
import { Button, DatePicker, Divider, Form, Input, InputNumber, Space } from 'antd'
import { fieldsData } from '@utils'
import moment from 'moment'
import { Teacher } from '@services/types/teacherTypes'

const { Item } = Form

const TeacherCreateForm = () => {
	const { data, open, entity } = useAppSelector(drawer)
	const teacher = data as Teacher
	const [form] = Form.useForm()
	const fields = fieldsData(data)


	const onFinish = ( d: any ) => {
		console.log(d)
	}

	useEffect(() => {
		if (teacher) {
			form.setFieldsValue({
				birthday: moment(teacher.birthday)
			})
		}
	}, [data])

	useEffect(() => {
		return () => {
			form.resetFields()
		}
	}, [open])

	return (
		<Form onFinish={onFinish} form={form} layout={'vertical'} fields={fields}>
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
			<Space>
				<Item label={'Birthday'} name={'birthday'}
							rules={[{ type: 'object' as const, required: true, message: 'Please select time!' }]}>
					<DatePicker />
				</Item>
				<Item label={'Phone'} name={'phone'} rules={[
					{
						required: entity === 'create'
					}
				]}>
					<InputNumber controls={false} style={{
						width: '100%'
					}} />
				</Item>
			</Space>
			<Item>
				<Button htmlType={'submit'}>Submit</Button>
			</Item>
		</Form>
	)
}

export default TeacherCreateForm