const _url: string = 'http://apilayer.net/api/validate'
const _apiKey: string = 'dd2a53d050b753d53b1b07a92e8eb651'

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
