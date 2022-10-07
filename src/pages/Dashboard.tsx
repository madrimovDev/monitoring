import React, { useEffect } from 'react'
import { Space } from 'antd'
import { useAppDispatch, useAppSelector } from '@hook'
import { getDashboard } from '@store/actions'


const Dashboard = () => {
	const { data, status } = useAppSelector(state => state.dashboard)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getDashboard())
	}, [dispatch])

	return (
		<Space style={{
			alignItems: 'start',
			flexWrap: 'wrap'
		}}>

		</Space>
	)
}

export default Dashboard