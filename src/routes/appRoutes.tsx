import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import SuspenseWithLoader from '@routes/SuspenseWithLoader'

const Dashboard = lazy(() => import('@pages/Dashboard'))
const Admins = lazy(() => import('@pages/Admins'))
const Teachers = lazy(() => import('@pages/Teachers'))
const PageNotFound = lazy(() => import('@pages/PageNotFound'))

const appRoutes: RouteObject[] = [
	{
		path: '/',
		element: <SuspenseWithLoader children={<Dashboard />} />
	},
	{
		path: 'admins',
		element: <SuspenseWithLoader children={<Admins />} />
	},
	{
		path: 'teachers',
		element: <SuspenseWithLoader children={<Teachers />} />
	},
	{
		path: '*',
		element: <SuspenseWithLoader children={<PageNotFound />} />
	}
]

export default appRoutes