import { useEffect, useState } from 'react'
import { IMaskInput } from 'react-imask'
import classNames from 'classnames'

import { EntryTelProps } from './EntryTel.props'

import styles from './EntryTel.module.scss'

import FocusableButton from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import { numData } from './numData'

const EntryTel = ({ isValid, onSubmitNumber, ...props }: EntryTelProps) => {
	const [isChecked, setChecked] = useState<boolean>(false)
	const [phone, setPhone] = useState<string>('')
	const [isFullNumber, setFullNumber] = useState<boolean>(false)

	useEffect(() => {
		if (phone?.length === 11 && isChecked) {
			setFullNumber(true)
		} else if (phone?.length > 11) {
			setPhone((oldPhone) => oldPhone.slice(0, 11))
			setFullNumber(true)
		} else {
			setFullNumber(false)
		}
	}, [phone, isFullNumber, isChecked])

	useEffect(() => {
		const handleKeyUp = (event: KeyboardEvent) => {
			const resKeyDown = numData.filter((item) => {
				const itemString = item.toString()
				if (itemString === event.key) {
					return itemString
				} else if (item === 'стереть' && event.key === 'Backspace') {
					return item
				}
			})

			const keyDown = [resKeyDown].toString()

			if (keyDown === 'стереть') {
				setPhone((oldPhone) => oldPhone.slice(0, -1))
			} else if (keyDown && phone.length <= 10) {
				setPhone((oldPhone) => oldPhone + keyDown)
			}
		}

		window.addEventListener('keydown', handleKeyUp)

		return () => {
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [])

	const onWriteNum = (item: number | 'стереть') => {
		if (typeof item === 'number' && phone.length <= 10) {
			const itemString = item.toString()
			setPhone((oldPhone) => oldPhone + itemString)
		} else if (item === 'стереть') {
			setPhone((oldPhone) => oldPhone.slice(0, -1))
		}
	}

	return (
		<div className={styles.wrapper} {...props}>
			<h1 className={styles.title}>Введите ваш номер мобильного телефона</h1>
			<IMaskInput
				className={classNames(styles.input, { [styles.error]: !isValid })}
				mask='+{7}(000)000-00-00'
				lazy={false}
				value={phone}
				onAccept={(value, mask) => setPhone(mask.unmaskedValue)}
				readOnly
			/>
			<p className={styles.descr}>
				и с Вами свяжется наш менеждер для дальнейшей консультации
			</p>
			<div className={styles.numPad}>
				{numData.map((item) => (
					<FocusableButton
						key={item}
						focusKey={item.toString()}
						onEnterPress={() => onWriteNum(item)}
						onClick={() => {
							onWriteNum(item)
						}}
						className={item === 'стереть' ? styles.delete : ''}
					>
						{item}
					</FocusableButton>
				))}
			</div>
			{isValid ? (
				<label className={styles.personal}>
					<Checkbox
						checked={isChecked}
						onEnterPress={() => setChecked(!isChecked)}
						onChange={() => setChecked(!isChecked)}
						name='personal'
					/>
					<p>Согласие на обработку персональных данных</p>
				</label>
			) : (
				<span className={styles.errorMessage}>Неверно введён номер</span>
			)}

			<FocusableButton
				focusable={isChecked && isFullNumber}
				disabled={!isChecked || !isFullNumber}
				className={styles.accept}
				onEnterPress={() => onSubmitNumber(phone)}
				onClick={() => onSubmitNumber(phone)}
			>
				Подтвердить номер
			</FocusableButton>
		</div>
	)
}

export default EntryTel
