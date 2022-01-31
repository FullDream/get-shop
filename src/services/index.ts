
const _url = process.env.REACT_APP_NUMVEREFY_URL
const _apiKey = process.env.REACT_APP_NUMVEREFY_API_KEY



const request = async (number: string) => {
	const result: any = await fetch(
		`${_url}?access_key=${_apiKey}&number=${number}`
	)
		.then((response) => {
			return response.json()
		})
		

    return result
}

export default request
