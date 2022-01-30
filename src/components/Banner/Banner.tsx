import { BannerProps } from './Banner.props'

import Button from '../Button/Button'
import styles from './Banner.module.scss'

import qrCode from '../../img/qr-code.jpg'

const Banner = ({onActivePromo}: BannerProps) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.callToAction}>
				ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
			</span>
			<img className={styles.qrCode} src={qrCode} alt='Фото QR-кода' />
			<span className={styles.qrDescr}>Сканируйте QR-код или нажмите ОК</span>
			<Button
				onEnterPress={() => onActivePromo()}
				onClick={() => onActivePromo()}
				className={styles.button}
			>
				OK
			</Button>
		</div>
	)
}

export default Banner
