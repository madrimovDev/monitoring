import { configureStore } from '@reduxjs/toolkit'
import { adminDrawerReducer, authReducer } from './reducers'

const store = configureStore({
	reducer: {
		auth: authReducer,
		adminDrawer: adminDrawerReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store