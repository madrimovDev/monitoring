import React from 'react'
import { Space } from 'antd'
import { StatisticsCard } from '@ui'

export type Directions = 'Frontend' | 'Backend' | 'Android' | 'Python'
export type Roles = 'Teachers' | 'Groups' | 'Students' | 'Admins'

interface Students {
	name: Directions,
	value: number
}

interface Group {
	name: Directions,
	value: number
}

interface Direction {
	name: Directions
	value: number
}

export interface StatisticsCardType {
	title: Roles
	path: string
	directions?: Direction[]
	students?: Students[]
	groups?: Group[]
	statistics?: boolean
	value?: number
}

const statisticsCards: StatisticsCardType[] = [
	{
		title: 'Teachers',
		path: 'teachers',
		directions: [
			{
				name: 'Frontend',
				value: 4
			},
			{
				name: 'Backend',
				value: 1
			},
			{
				name: 'Android',
				value: 2
			},
			{
				name: 'Python',
				value: 1
			}
		]
	},
	{
		title: 'Students',
		path: 'students',
		students: [
			{
				name: 'Frontend',
				value: 200
			},
			{
				name: 'Backend',
				value: 150
			},
			{
				name: 'Android',
				value: 50
			},
			{
				name: 'Python',
				value: 100
			}
		]
	},
	{
		title: 'Groups',
		path: 'groups',
		groups: [
			{
				name: 'Frontend',
				value: 10
			},
			{
				name: 'Backend',
				value: 5
			},
			{
				name: 'Android',
				value: 2
			},
			{
				name: 'Python',
				value: 2
			}
		]
	},
	{
		title: 'Admins',
		path: 'admins',
		statistics: false
	}
]

const Dashboard = () => {
	return (
		<div>
			<Space style={{
				alignItems: 'start',
				flexWrap: 'wrap'
			}}>
				{
					statisticsCards.map(item => {
						return (
							<StatisticsCard {...item} key={item.path} />
						)
					})
				}
			</Space>
		</div>
	)
}

export default Dashboard