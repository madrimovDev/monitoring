import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import SuspenseWithLoader from '@routes/SuspenseWithLoader'

const Dashboard = lazy(() => import('@pages/Dashboard'))
const Admins = lazy(() => import('@pages/Admins'))
const Teachers = lazy(() => import('@pages/Teachers'))
const Directions = lazy(() => import('@pages/Directions'))
const Groups = lazy(() => import('@pages/Groups'))
const PageNotFound = lazy(() => import('@pages/PageNotFound'))

const adminRoutes: RouteObject[] = [
	{
		index: true,
		element: <SuspenseWithLoader children={<Dashboard />} />,
	},
	{
		path: 'admins',
		element: <SuspenseWithLoader children={<Admins />} />,
	},
	{
		path: 'teachers',
		element: <SuspenseWithLoader children={<Teachers />} />,
	},
	{
		path: 'directions',
		element: <SuspenseWithLoader children={<Directions />} />,
	},
	{
		path: 'groups',
		element: <SuspenseWithLoader children={<Groups />} />,
	},
	{
		path: '*',
		element: <SuspenseWithLoader children={<PageNotFound />} />,
	},
]

export default adminRoutes
