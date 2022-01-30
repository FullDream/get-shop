import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

export interface PromoProps
	extends DetailedHTMLProps<
		HtmlHTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	onClosePromo: () => void
}
