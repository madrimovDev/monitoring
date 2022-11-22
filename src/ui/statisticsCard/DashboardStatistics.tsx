import React from 'react'
import { Card, Col, Statistic } from 'antd'
import { useNavigate } from 'react-router-dom'

interface DashboardStatisticsPropsType {
	title: string
	count: number
	loading: boolean
}

const DashboardStatistics = ({
	title,
	count,
	loading,
}: DashboardStatisticsPropsType) => {
	const navigate = useNavigate()

	const clickHandler = () => {
		navigate(title.toLowerCase())
	}

	return (
		<Col
			span={6}
			onClick={clickHandler}>
			<Card
				bordered
				loading={loading}
				hoverable>
				<Statistic
					valueStyle={{ fontSize: 30 }}
					title={title}
					value={count}
				/>
			</Card>
		</Col>
	)
}

export default DashboardStatistics
