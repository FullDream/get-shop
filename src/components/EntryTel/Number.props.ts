import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface NumberProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isValid: boolean
    onSubmitNumber: (value: string) => void
}