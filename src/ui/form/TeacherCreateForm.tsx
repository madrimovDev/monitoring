import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@hook'
import { directions, drawer } from '@store'
import { Button, Checkbox, ConfigProvider, Divider, Form, Input, InputNumber, Space } from 'antd'
import { fieldsData } from '@utils'
import { Teacher } from '@services/types/teacherTypes'
import { getAllDirections } from '@store/actions/directionsActions'

const { Item } = Form

const TeacherCreateForm = () => {
	const { data, entity } = useAppSelector(drawer)
	const { data: direction, status } = useAppSelector(directions)
	const teacher = data as Teacher
	const [form] = Form.useForm()
	const fields = fieldsData(data)
	const dispatch = useAppDispatch()

	const dir = direction?.map(d => d.id)

	const onFinish = ( d: any ) => {
		console.log(d)
		// dispatch(createTeacher(d))
	}

	// useEffect(() => {
	// 	if (teacher) {
	// 		form.setFieldsValue({
	// 			birthday: moment(teacher.birthday)
	// 		})
	// 	}
	// }, [data])

	useEffect(() => {
		dispatch(getAllDirections())
		return () => {
			form.resetFields()
		}
	}, [])

	return (
		<ConfigProvider>
			<Form form={form} onFinish={onFinish} layout={'vertical'} fields={fields}>
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
					<Item label={'Birthday'} name={'birthday'} rules={[
						{
							type: 'date'
						}
					]}>
						<Input type={'date'} />
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
				<Divider children={'Directions'} />
				<Item name={'directions'}>
					<Checkbox.Group options={dir} />
				</Item>
				<Item>
					<Button htmlType={'submit'}>Submit</Button>
				</Item>
			</Form>
		</ConfigProvider>
	)
}

export default TeacherCreateForm
