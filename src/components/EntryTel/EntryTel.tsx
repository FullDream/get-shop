// import { NumberProps } from './Number.props'
import { useEffect, useState } from 'react'
import { IMaskInput } from 'react-imask'
import request from '../../services'
import FocusableButton from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'

import styles from './EntryTel.module.scss'
import { numData } from './numData'

const EntryTel = () => {
	const [isChecked, setChecked] = useState<boolean>(false)
	const [phone, setPhone] = useState<string>('5454')
	const [isValid, setValid] = useState<boolean>(true)

	useEffect(() => {
		if (phone?.length === 11) {
			request(phone).then((data) => {
				setValid(data.valid)
			})
			console.log(isValid)
		}
	}, [phone, isValid])

	const onWriteNum = (item: number | 'стереть') => {
		if (typeof item === 'number') {
			const itemString = item.toString()
			setPhone((oldPhone) => oldPhone + itemString)
		} else if (item === 'стереть') {
			setPhone((oldPhone) => oldPhone.slice(0, -1) )
		}
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Введите ваш номер мобильного телефона</h1>
			<IMaskInput
				className={styles.input}
				mask='+{7}(000)000-00-00'
				lazy={false}
				value={phone}
				// onChange={(event) => setPhone(event.target.value)}
				onAccept={(value, mask) => setPhone(mask.unmaskedValue)}

				// readOnly
			/>
			<p className={styles.descr}>
				и с Вами свяжется наш менеждер для дальнейшей консультации
			</p>
			<div className={styles.numPad}>
				{numData.map((item) => (
					<FocusableButton
						onEnterPress={() => onWriteNum(item)}
						onClick={() => {onWriteNum(item)}}
						className={item === 'стереть' ? styles.delete : ''}
					>
						{item}
					</FocusableButton>
				))}
			</div>
			<label className={styles.personal}>
				<Checkbox
					checked={isChecked}
					onEnterPress={() => setChecked(!isChecked)}
					name='personal'
				/>
				<p>Согласие на обработку персональных данных</p>
			</label>
			<FocusableButton
				focusable={isChecked}
				disabled={!isChecked}
				className={styles.accept}
			>
				Подтвердить номер
			</FocusableButton>
		</div>
	)
}

export default EntryTel
