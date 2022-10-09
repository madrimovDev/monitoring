import { configureStore } from '@reduxjs/toolkit'
import { adminDrawerReducer, authReducer, dashboardReducer, permissionsReducer } from './reducers'

const store = configureStore({
	reducer: {
		auth: authReducer,
		adminDrawer: adminDrawerReducer,
		dashboard: dashboardReducer,
		permissions: permissionsReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store