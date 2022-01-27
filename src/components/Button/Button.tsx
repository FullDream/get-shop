
import { ButtonProps } from './Button.props'
import classNames from 'classnames'

import styles from './Button.module.scss'

const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button className={classNames(styles.button, className)} {...props}>
			{children}
		</button>
	)
}

export default Button
