
const _url = process.env.REACT_APP_URL
const _apiKey = process.env.REACT_APP_API_KEY



const request = async (number: string) => {
	const result: any = await fetch(
		`${_url}api_key=${_apiKey}&phone=${number}`
	).then((response) => {
		return response.json()
	})
		

    return result
}

export default request
