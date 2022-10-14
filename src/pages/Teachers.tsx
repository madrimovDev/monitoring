import React, { useEffect } from 'react'
import { TeacherService } from '@services'

const Teachers = () => {
	useEffect(() => {
		TeacherService.getAll()
	}, [])
	return (
		<div>

		</div>
	)
}

export default Teachers