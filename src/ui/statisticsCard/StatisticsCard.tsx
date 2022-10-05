import React from 'react'
import { Button, Card, Statistic, Typography } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { StatisticsCardType } from '../../pages/Dashboard'
import { useNavigate } from 'react-router-dom'
import StatisticsList from '../list/StatisticsList'

const { Text } = Typography

const StatisticsCard = ( { statistics, title, groups, directions, value, path, students }: StatisticsCardType ) => {
	const navigate = useNavigate()

	return (
		<Card title={title} style={{ minWidth: 270, width: '100%' }} extra={
			<>
				<Button icon={<EyeOutlined />} onClick={() => navigate(path)} size={'small'}>View Teachers</Button>
			</>
		}
		>
			{title === 'Teachers' && directions &&
				<StatisticsList header={{ name: 'Direction', suffix: 'Count' }} dataSourse={directions} />}
			{title === 'Students' && students &&
				<StatisticsList header={{ name: 'Direction', suffix: 'Count' }} dataSourse={students} />}
			{title === 'Groups' && groups &&
				<StatisticsList header={{ name: 'Direction', suffix: 'Count' }} dataSourse={groups} />}

			{title === 'Admins' && <Statistic title={'Admins'} value={3} />}
		</Card>
	)
}

export default StatisticsCard