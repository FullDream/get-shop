import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

export interface BannerProps
	extends DetailedHTMLProps<
		HtmlHTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	onActivePromo: () => void
}
