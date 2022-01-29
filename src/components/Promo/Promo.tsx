// import { PromoProps } from './Promo.props'
import styles from './Promo.module.scss'

import Number from '../Number/Number'
import Button from '../Button/Button'
import bgDog from '../../img/dog.jpg'
import qrImg from '../../img/qr-code.jpg'
const Promo = () => {
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${bgDog})` }}
		>
			<div className={styles.panel}>
				<Number/>
			</div>

			<Button typeBtn='close' className={styles.close}/>

			<div className={styles.qrCode}>
				<p>
					Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
				</p>
				<img className={styles.qrCodeImg} src={qrImg} alt='изобржение QR-кода' />
			</div>
		</div>
	)
}

export default Promo
