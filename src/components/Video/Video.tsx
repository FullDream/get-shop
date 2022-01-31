import { ForwardedRef, forwardRef } from 'react'
import { VideoProps } from './Video.props'

import styles from './Video.module.scss'

const Video = forwardRef(
	({ src, ...props }: VideoProps, ref: ForwardedRef<HTMLVideoElement>) => {
		return (
			<video
				ref={ref}
				className={styles.video}
				src={src}
				autoPlay
				muted
				loop
				{...props}
			/>
		)
	}
)

export default Video
