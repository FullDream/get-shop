import { useState } from 'react'

import { PromoProps } from './Promo.props'
import request from '../../services'
import { Api } from '../../interface/api.interface'

import styles from './Promo.module.scss'

import EntryTel from '../EntryTel/EntryTel'
import Button from '../Button/Button'
import Thanks from '../Thanks/Thanks'

import bgDog from '../../img/dog.jpg'
import qrImg from '../../img/qr-code.jpg'

const Promo = ({ onClosePromo, ...props }: PromoProps) => {
	const [isValid, setValid] = useState<boolean>(true)
	const [isSuccess, setSuccess] = useState<boolean>(false)

	const onSubmitNumber = (phone: string) => {
		request(phone).then((data: Api) => {
			if (data.valid) {
				setValid(data.valid)
				setSuccess(true)
			} else {
				setValid(data.valid)
			}
		})
	}

	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${bgDog})` }}
			{...props}
		>
			<div className={styles.panel}>
				{!isSuccess ? (
					<EntryTel isValid={isValid} onSubmitNumber={onSubmitNumber} />
				) : (
					<Thanks />
				)}
			</div>

			<Button
				typeBtn='close'
				onEnterPress={() => onClosePromo()}
				onClick={() => onClosePromo()}
				className={styles.close}
			/>

			<div className={styles.qrCode}>
				<p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
				<img
					className={styles.qrCodeImg}
					src={qrImg}
					alt='изобржение QR-кода'
				/>
			</div>
		</div>
	)
}

// const FocusablePromo: any = withFocusable()(Promo)

export default Promo
