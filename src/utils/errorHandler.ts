const errorHandler = (error: boolean, errorMessage?: string) => {
	if (errorMessage && error) {
		return {
			error: true,
			errorMessage: errorMessage,
		}
	}

	return {
		error: false,
		errorMessage: '',
	}
}

export default errorHandler
