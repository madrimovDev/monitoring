import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

export const selector = (state: RootState) => state
export const auth = createSelector(selector, (state) => state.auth)
export const drawer = createSelector(selector, (state) => state.adminDrawer)
export const permissions = createSelector(
	selector,
	(state) => state.permissions
)
export const dashboard = createSelector(selector, (state) => state.dashboard)
export const admins = createSelector(selector, (state) => state.admins)
export const teachers = createSelector(selector, (state) => state.teachers)
export const directions = createSelector(selector, (state) => state.directions)
export const modal = createSelector(selector, (state) => state.modal)
