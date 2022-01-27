import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface VideoProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
    src: string 
}