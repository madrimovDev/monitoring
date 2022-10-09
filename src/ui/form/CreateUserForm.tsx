import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { IAdmin, ITeacher } from '@store/types/permissionsType'
import fieldsData from '@utils/fieldsData'
import { useAppSelector } from '@hook'
import { drawer, permissions } from '@store'

const { Item, List } = Form

interface CreateUserFormPropsType {
	data?: ITeacher | IAdmin | null
}


const CreateUserForm = ( { data }: CreateUserFormPropsType ) => {
	const { type, entity } = useAppSelector(drawer)
	const { status, data: permission } = useAppSelector(permissions)
	const fields = entity == 'update' ? fieldsData(data) : []

	console.log(permission)

	const onfinish = ( data: any ) => {
		const _data = {
			...data,
			permissions: []
		}
		Object.keys(data).forEach(( key ) => {
			if (data[key] === true) {
				delete data[key]
				_data.permissions.push(key)
			}
		})
	}

	return (
		<Form onFinish={onfinish} layout={'vertical'} fields={fields} autoComplete={'off'}>
			{
				fields.map(field => {
					if (field.name === 'permissions') {
						return (
							<>
								{permission && permission.permissions.map(item => {
									const key = field.value as Array<string>
									return <Item key={item} noStyle valuePropName={'checked'}>
										<Checkbox defaultChecked={key.includes(item)}>{item}</Checkbox>
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