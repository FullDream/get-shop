import classNames from 'classnames'
import { CheckboxProps } from './Checkbox.props'

import styles from './Checkbox.module.scss'

import {ReactComponent as Check} from './check.svg'

import { withFocusable } from '@noriginmedia/react-spatial-navigation'

const Checkbox = ({ focusKey, checked, focused, name, className, ...props }: CheckboxProps) => {
	return (
		<span className={classNames(styles.wrapper, {[styles.focused]: focused})}>
			<input
				className={styles.input}
				type='checkbox'
				checked={checked}
				name={name}
				id={focusKey}
				{...props}
			/>
			<Check className={styles.check} />
		</span>
	)
}

const FocusableCheckbox = withFocusable()(Checkbox)
export default FocusableCheckbox
