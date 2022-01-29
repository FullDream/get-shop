import { VideoProps } from './Video.props'
import styles from './Video.module.scss'
import { ForwardedRef, forwardRef } from 'react'

const Video = forwardRef(
	({ src, ...props }: VideoProps, ref: ForwardedRef<HTMLVideoElement>) => {
		return (
			<video
				ref={ref}
				className={styles.video}
				onClick={(event) => console.log(event)}
				src={src}
				autoPlay
				muted
				// controls
				{...props}
			/>
		)
	}
)

export default Video
