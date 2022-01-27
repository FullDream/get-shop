import { withFocusable, withFocusableOpts } from '@noriginmedia/react-spatial-navigation'
import styles from './App.module.scss'

import Video from '../Video/Video'
import Banner from '../Banner/Banner'

import movie from './../../movie/volvo.mp4'
import { useEffect } from 'react'



function App({ setFocus }: any) {
	useEffect(() => {
		setFocus()
	}, [])
	return (
		<div className={styles.app}>
			<Video src={movie} />
			<Banner />
		</div>
	)
}

const FocusableApp = withFocusable()(App)

export default FocusableApp
