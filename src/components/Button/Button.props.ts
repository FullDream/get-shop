import { withFocusableProps } from "@noriginmedia/react-spatial-navigation";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    focusKey?: string
    focused?: boolean
    typeBtn?: 'default' | 'close'

}