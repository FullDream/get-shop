import { withFocusable } from '@noriginmedia/react-spatial-navigation'
import { ButtonProps } from './Button.props'
import {ReactComponent as CloseBtn} from './close.svg'
import classNames from 'classnames'

import styles from './Button.module.scss'

const Button = ({ focusKey, typeBtn = 'default', focused, className, children, ...props }: ButtonProps) => {
	return (
		<button
			id={focusKey}
			className={classNames(
				styles.button,
				{
					[styles.close]:  typeBtn = 'close',
					[styles.active]: focused,
				},
				className
			)}
			{...props}
		>
			{typeBtn === 'close' ? <CloseBtn/> : children}
		</button>
	)
}


const FocusableButton = withFocusable()(Button)

export default FocusableButton
