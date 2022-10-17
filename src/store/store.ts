import { configureStore } from '@reduxjs/toolkit'
import { adminDrawerReducer, adminReducer, authReducer, dashboardReducer, permissionsReducer } from './reducers'
import teachersReducer from '@store/reducers/teachersReducer'

const store = configureStore({
	reducer: {
		auth: authReducer,
		adminDrawer: adminDrawerReducer,
		dashboard: dashboardReducer,
		permissions: permissionsReducer,
		admins: adminReducer,
		teachers: teachersReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store