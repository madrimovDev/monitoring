import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { LoadingPage } from '@pages'

const Login = lazy(() => import('@pages/Login'))
const RequireAuth = lazy(() => import('@pages/RequireAuth'))
const Layout = lazy(() => import('@ui/layout/Layout'))
const PageNotFound = lazy(() => import('@pages/PageNotFound'))

const routes = createBrowserRouter([
	{
		path: '/login',
		element: <Suspense fallback={<LoadingPage />} children={<Login />} />
	},
	{
		path: '/',
		element: <Suspense fallback={<LoadingPage />} children={<RequireAuth />} />,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<LoadingPage />} children={<Layout />} />,
				children: [
					{
						path: '*',
						element: <Suspense fallback={<LoadingPage />} children={<PageNotFound />} />
					}
				]
			}
		]
	}
])

export default routes