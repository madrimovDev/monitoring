import React from 'react'
import { List, Typography } from 'antd'
import { Directions } from '../../pages/Dashboard'

interface StatisticsListPropsType {
	header: {
		name: string,
		suffix: string
	}
	dataSourse: {
		name: Directions
		value: number
	}[]
}

const { Item } = List
const { Text } = Typography
const StatisticsList = ( { dataSourse, header }: StatisticsListPropsType ) => {
	return (
		<List header={
			<Item>
				<Text>{header.name}</Text>
				<Text>{header.suffix}</Text>
			</Item>
		}
					dataSource={dataSourse}
					renderItem={( item ) => {
						return (
							<Item>
								<Text>
									{item.name}
								</Text>
								<Text>
									{item.value}
								</Text>
							</Item>
						)
					}}
		/>
	)
}

export default StatisticsList