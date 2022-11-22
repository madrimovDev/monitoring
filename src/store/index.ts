export { default as store } from './store'
export {
	adminDrawerReducer,
	authReducer,
	dashboardReducer,
	permissionsReducer,
} from './reducers'
export {
	openDrawer,
	closeDrawer,
	getPermissions,
	verifyAction,
	logoutAction,
	loginAction,
	getDashboard,
} from './actions'

export {
	auth,
	permissions,
	dashboard,
	drawer,
	admins,
	teachers,
	directions,
} from './selectors/selectors'
