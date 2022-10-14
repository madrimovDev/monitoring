import { createBrowserRouter } from 'react-router-dom'
import SuspenseWithLoader, { lazyPage } from '@routes/SuspenseWithLoader'
import appRoutes from '@routes/appRoutes'

const Login = lazyPage('@pages/Login')
const RequireAuth = lazyPage('@pages/RequireAuth')
const Layout = lazyPage('@ui/layout/Layout')

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