import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { IAdmin, ITeacher } from '@store/types/permissionsType'
import fieldsData from '@utils/fieldsData'
import { useAppSelector } from '@hook'
import { drawer } from '@store'

const { Item, List } = Form

interface CreateUserFormPropsType {
	data?: ITeacher | IAdmin | null
}


const CreateUserForm = ( { data }: CreateUserFormPropsType ) => {
	const { type, entity } = useAppSelector(drawer)
	const fields = entity == 'update' ? fieldsData(data) : []

	const onfinish = ( data: any ) => {
		console.log(data as IAdmin)
	}

	return (
		<Form onFinish={onfinish} layout={'vertical'} fields={fields} autoComplete={'off'}>
			{
				fields.map(field => {
					if (field.name === 'permissions') {
						return (
							<Item colon={false} >
								{Array.isArray(field.value) && field.value.map(item => (
									<Checkbox  />
								))}
							</Item>
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