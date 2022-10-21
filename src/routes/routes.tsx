import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import SuspenseWithLoader from '@routes/SuspenseWithLoader'
import adminRoutes from '@routes/adminRoutes'
import TeacherLayout from '@ui/layout/teacherLayout'

const Login = lazy(() => import('@pages/Login'))
const RequireAuth = lazy(() => import('@pages/RequireAuth'))
const AdminLayout = lazy(() => import('@ui/layout/adminLayout'))

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
				path: 'admin',
				element: <SuspenseWithLoader children={<AdminLayout />} />,
				children: adminRoutes
			},
			{
				path: 'teacher',
				element: <SuspenseWithLoader children={<TeacherLayout />} />
			}
		]
	}
])

export default routes
