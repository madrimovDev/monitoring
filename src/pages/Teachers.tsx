import React, { useEffect } from 'react'
import { useAppDispatch } from '@hook'
import { getAllTeachers } from '@store/actions/teachersActions'

const Teachers = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getAllTeachers())
	}, [])
	return (
		<div>

		</div>
	)
}

export default Teachers