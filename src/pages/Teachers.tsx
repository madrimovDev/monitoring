import React, { useEffect } from 'react'
import { TeacherService } from '@services'

const Teachers = () => {
	useEffect(() => {
		TeacherService.create({
			username: 'madrimov',
			name: 'madrimov',
			birthday: new Date(),
			phone: '+998914245014',
			surname: 'srssd',
			password: '1235',
			directions: [0, 2]
		})
	}, [])
	return (
		<div>

		</div>
	)
}

export default Teachers