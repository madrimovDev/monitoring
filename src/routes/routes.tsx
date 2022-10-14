import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import SuspenseWithLoader from '@routes/SuspenseWithLoader'
import appRoutes from '@routes/appRoutes'

const Login = lazy(() => import('@pages/Login'))
const RequireAuth = lazy(() => import('@pages/RequireAuth'))
const Layout = lazy(() => import('@ui/layout/Layout'))

const routes = createBrowserRouter([
	{
		path: '/login',
		element: <SuspenseWithLoader children={<Login />} />
	},
	{
		path: '/',
		element: <SuspenseWithLoader children={<RequireAuth />} />,
		children: [
			{
				path: '/',
				element: <SuspenseWithLoader children={<Layout />} />,
				children: appRoutes,
			}
		]
	}
])

export default routes