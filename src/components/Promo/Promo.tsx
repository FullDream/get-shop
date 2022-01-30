import { useEffect, useState } from 'react'
import request from '../../services'
import { PromoProps } from './Promo.props'

import styles from './Promo.module.scss'

import EntryTel from '../EntryTel/EntryTel'
import Button from '../Button/Button'
import Thanks from '../Thanks/Thanks'

import bgDog from '../../img/dog.jpg'
import qrImg from '../../img/qr-code.jpg'

const Promo = ({ onClosePromo }: PromoProps) => {
	const [isValid, setValid] = useState<boolean>(true)
	const [isSuccess, setSuccess] = useState<boolean>(false)

	useEffect(() => {
		if (isValid) {
		}
	}, [isValid, isSuccess])

	const onSubmitNumber = (phone: string) => {
		request(phone).then((data) => {
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

export default Promo
