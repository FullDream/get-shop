import { withFocusable } from '@noriginmedia/react-spatial-navigation'
import styles from './App.module.scss'

import Video from '../Video/Video'
import Banner from '../Banner/Banner'

import movie from './../../movie/volvo.mp4'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Promo from '../Promo/Promo'

const App = ({ setFocus }: any) => {
	const [isActite, setIsActive] = useState<boolean>(false),
		  [isOpenPromo, setOpenPromo] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => {
			setIsActive(true)
			setFocus()
		}, 2000)
	}, [])


	return (
		<div className={styles.app}>
			<Video src={movie} />
			{isActite && <Banner />}
			{isOpenPromo && <Promo/>}
		</div>
	)
}

const FocusableApp = withFocusable()(App)

export default FocusableApp
