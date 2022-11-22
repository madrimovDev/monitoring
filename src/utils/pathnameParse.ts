type PathnameParseParamsType = {
	def: string
	pathname: string
}

const pathnameParse = ({ def, pathname }: PathnameParseParamsType) => {
	const result = pathname.split('/').filter((item) => item !== '')[0]
	return result === '' || !result ? def : result
}

export default pathnameParse
