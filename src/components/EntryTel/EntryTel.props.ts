import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface EntryTelProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isValid: boolean
    onSubmitNumber: (value: string) => void
}