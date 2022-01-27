import { VideoProps } from './Video.props'
import styles from './Video.module.scss'

const Video = ({ src, ...props }: VideoProps) => {
	return (
		<>
			<video
				className={styles.video}
				onClick={(event) => console.log(event)}
				src={src}
				autoPlay
				muted
				controls
				{...props}
			></video>
		</>
	)
}

export default Video
