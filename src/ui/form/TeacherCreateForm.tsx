import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@hook'
import { directions, drawer } from '@store'
import {
	Button,
	Checkbox,
	Divider,
	Form,
	Input,
	InputNumber,
	Space,
} from 'antd'
import { fieldsData } from '@utils'
import { createTeacher } from '@store/actions/teachersActions'

const { Item } = Form

const TeacherCreateForm = () => {
	const { data, entity, open } = useAppSelector(drawer)
	const { data: direction } = useAppSelector(directions)
	const [form] = Form.useForm()
	const fields = fieldsData(data)
	const dispatch = useAppDispatch()

	const onFinish = (d: any) => {
		const { directions } = d
		let directs: any[] = []

		directions.forEach((d: string) => {
			directs.push(direction?.find((item) => item.name === d)?.id)
		})

		dispatch(
			createTeacher({
				...d,
				phone: d.phone.toString(),
				directions: directs,
			})
		)
	}

	useEffect(() => {
		if (!open) {
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
				label={'Username'}
				name={'username'}
				rules={[
					{
						required: true,
						min: 3,
					},
				]}>
				<Input />
			</Item>
			<Item
				label={'Password'}
				name={'password'}
				rules={[
					{
						required: entity === 'create',
						min: 3,
					},
				]}>
				<Input />
			</Item>
			<Divider children={'Teacher Date'} />
			<Item
				label={'Name'}
				name={'name'}
				rules={[
					{
						required: true,
						min: 3,
					},
				]}>
				<Input />
			</Item>
			<Item
				label={'Surname'}
				name={'surname'}
				rules={[
					{
						required: true,
						min: 3,
					},
				]}>
				<Input />
			</Item>
			<Space>
				<Item
					label={'Phone'}
					name={'phone'}
					style={{
						width: '100%'
					}}
					rules={[
						{
							required: entity === 'create',
						},
					]}>
					<InputNumber
						controls={false}
						type='number'
						style={{
							width: '100%',
						}}
					/>
				</Item>
			</Space>
			<Divider children={'Directions'} />
			<Item name={'directions'}>
				<Checkbox.Group options={direction?.map((d) => d.name)} />
			</Item>
			<Item>
				<Button htmlType={'submit'}>Submit</Button>
			</Item>
		</Form>
	)
}

export default TeacherCreateForm
