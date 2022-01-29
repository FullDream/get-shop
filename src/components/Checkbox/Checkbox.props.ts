import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface CheckboxProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	focusKey?: string
	focused?: boolean
	checked?: boolean
}