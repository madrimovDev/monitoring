interface FieldData {
	name: string
	value: string | number | []
}

const fieldsData = ( data: any ) => {
	const arr: FieldData[] = []

	if (!data) return arr

	Object.keys(data).forEach(( key ) => {
		if (key !== 'id') {
			arr.push({
				name: key,
				value: data[key]
			})
		}
	})
	return arr
}

export default fieldsData