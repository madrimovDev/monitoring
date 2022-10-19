import moment from 'moment'

interface FieldData {
	name: string
	value: string | number | []
}

const fieldsData = ( data: any ) => {
	const arr: FieldData[] = []

	if (!data) return arr

	Object.keys(data).forEach(( key ) => {
		if (key !== 'id') {
			if (Array.isArray(data[key])) {
				arr.push({
					name: key,
					value: data[key].map(( d: { name: any } ) => d.name)
				})
				return
			}
			if (key === 'birthday') {
				arr.push({
					name: key,
					value: moment(data[key]).format('YYYY-DD-MM')
				})
			} else {
				arr.push({
					name: key,
					value: data[key]
				})
			}
		}
	})
	return arr
}

export default fieldsData