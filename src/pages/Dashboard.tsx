import React, { useEffect } from 'react'
import { Divider, Row, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { getDashboard } from '@store/actions'
import { DashboardStatistics } from '@ui'
import { dashboard } from '@store'

const { Title } = Typography

const Dashboard = () => {
	const { data, status } = useAppSelector(dashboard)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getDashboard())
	}, [dispatch])

	return (
		<>
			<Title level={2} style={{
				marginTop: 60
			}}>Total</Title>
			<Divider />
			<Row gutter={[20, 20]}>

				{data && (
					<>
						<DashboardStatistics loading={status === 'PENDNIG'} title={'Directions'} count={data?.directions.length} />
						<DashboardStatistics loading={status === 'PENDNIG'} title={'Students'} count={data?.students} />
						<DashboardStatistics loading={status === 'PENDNIG'} title={'Teachers'} count={data?.teachers} />
						<DashboardStatistics loading={status === 'PENDNIG'} title={'Groups'} count={data?.groups} />
					</>
				)}
			</Row>
		</>
	)
}

export default Dashboard