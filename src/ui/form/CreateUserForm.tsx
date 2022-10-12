import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import fieldsData from '@utils/fieldsData'
import { useAppSelector } from '@hook'
import { drawer, permissions } from '@store'

const { Item } = Form


const CreateUserForm = () => {
	const { type, entity, data, open } = useAppSelector(drawer)
	const { status, data: permission } = useAppSelector(permissions)
	const fields = entity == 'update' ? fieldsData(data) : []
	const [form] = Form.useForm()

	const onfinish = ( data: any ) => {
		console.log(data)
		const _data = {
			...data,
			permissions: []
		}
		Object.keys(data).forEach(( key ) => {
			if (data[key] === true) {
				delete _data[key]
				_data.permissions.push(key)
			}
			if (!_data[key]) {
				delete _data[key]
			}
		})
		console.log(_data)
	}

	useEffect(() => {
		if (!open) {
			form.resetFields()
		}
	}, [open])

	return (
		<Form form={form} onFinish={onfinish} layout={'vertical'} fields={fields} autoComplete={'off'}>
			{
				fields.map(field => {
					if (field.name === 'permissions') {
						return (
							<>
								{permission && permission.permissions.map(item => {
									const key = field.value as Array<string>
									return <Item key={item} name={item} valuePropName={'checked'}>
										<Checkbox name={item} defaultChecked={true}>{item}</Checkbox>
									</Item>
								})}
							</>
						)
					}
					return (
						<Item key={field.name} name={field.name} label={field.name}>
							<Input />
						</Item>
					)
				})
			}
			<Item>
				<Button htmlType={'submit'}>Submit</Button>
			</Item>
		</Form>
	)
}

export default CreateUserForm