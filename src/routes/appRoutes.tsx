import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import SuspenseWithLoader, { lazyPage } from '@routes/SuspenseWithLoader'


const Dashboard = lazyPage('@pages/Dashboard')
const Admins = lazyPage('@pages/Admins')
const Teachers = lazyPage('@pages/Teachers')
const PageNotFound = lazyPage('@pages/PageNotFound')

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