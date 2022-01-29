import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './components/App/App'
import { initNavigation } from '@noriginmedia/react-spatial-navigation'

initNavigation()
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
