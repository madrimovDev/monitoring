import { configureStore } from '@reduxjs/toolkit'
import {
	adminDrawerReducer,
	adminReducer,
	authReducer,
	dashboardReducer,
	directionsReducer,
	permissionsReducer
} from './reducers'
import teachersReducer from '@store/reducers/teachersReducer'
import modalReducer from '@store/reducers/modalReducer'

const store = configureStore({
	reducer: {
		auth: authReducer,
		adminDrawer: adminDrawerReducer,
		dashboard: dashboardReducer,
		permissions: permissionsReducer,
		admins: adminReducer,
		teachers: teachersReducer,
		directions: directionsReducer,
		modal: modalReducer
	},
	devTools: !!import.meta.env.MODE
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
