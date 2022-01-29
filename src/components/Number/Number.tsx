// import { NumberProps } from './Number.props'
import { IMaskInput } from 'react-imask'


import styles from './Number.module.scss'

const Number = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Введите ваш номер мобильного телефона</h1>
			<IMaskInput
				className={styles.input}
				mask='+{7}(000)000-00-00'
				lazy={false}
                readOnly
			/>
			<p className={styles.descr}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
		</div>
	)
}

export default Number
