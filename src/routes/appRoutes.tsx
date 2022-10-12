import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import SuspenseWithLoader from '@routes/SuspenseWithLoader'

const Dashboard = lazy(() => import('@pages/Dashboard'))
const Admins = lazy(() => import('@pages/Admins'))

const appRoutes: RouteObject[] = [
	{
		path: '/',
		element: <SuspenseWithLoader children={<Dashboard />} />
	},
	{
		path: 'admins',
		element: <SuspenseWithLoader children={<Admins />} />
	}
]

export default appRoutes