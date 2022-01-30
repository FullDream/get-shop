import { useEffect, useRef, useState } from 'react'
import { withFocusable } from '@noriginmedia/react-spatial-navigation'
import { AppProps } from './App.props'

import styles from './App.module.scss'

import Video from '../Video/Video'
import Banner from '../Banner/Banner'
import Button from '../Button/Button'
import Promo from '../Promo/Promo'

import movie from './../../movie/volvo.mp4'


const App = ({ setFocus }: AppProps) => {
	const videoRef = useRef<HTMLVideoElement>(null)

	const [isActite, setIsActive] = useState<boolean>(false),
		[isOpenPromo, setOpenPromo] = useState<boolean>(false)

	useEffect(() => {
		let timerId: number

		timerId = window.setTimeout(() => {
			setIsActive(true)
			setFocus()
		}, 1000)

		return () => {
			window.clearTimeout(timerId)
		}
	}, [])

	const onActivePromo = () => {
		setOpenPromo(true)
		setIsActive(false)
		videoRef.current?.pause()
	}

	const onClosePromo = () => {
		setOpenPromo(false)
		videoRef.current?.play()
	}

	return (
		<div className={styles.app}>
			<Video ref={videoRef} src={movie} />
			{isActite && <Banner onActivePromo={onActivePromo} />}
			{isOpenPromo && <Promo onClosePromo={onClosePromo} />}
		</div>
	)
}

const FocusableApp = withFocusable()(App)

export default FocusableApp
