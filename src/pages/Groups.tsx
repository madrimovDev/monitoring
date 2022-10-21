import React, { useEffect } from 'react'
import { GroupsService } from '@services'

const Groups = () => {
	useEffect(() => {
		GroupsService.getAll().then(( res ) => {
			console.table(res.data)
		})
	}, [])
	return (
		<div>
			groups
		</div>
	)
}

export default Groups
