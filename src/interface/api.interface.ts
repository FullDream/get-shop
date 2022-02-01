 export interface Format {
		international: string
		local: string
 }

 export interface Country {
		code: string
		name: string
		prefix: string
 }

 export interface Api {
		phone: string
		valid: boolean
		format: Format
		country: Country
		location: string
		type: string
		carrier: string
 }