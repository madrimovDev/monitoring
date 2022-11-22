const getFullDate = (date: Date) => {
	const year = new Date(date).getFullYear()
	const month = new Date(date).getMonth()
	const day = new Date(date).getDay()

	const full =
		year +
		'.' +
		(month < 10 ? '0' + month : month) +
		'.' +
		(day < 10 ? '0' + day : day)
	return full
}

export default getFullDate
