import React from 'react';
import BigButton from '../UI/big button/BigButton';
import MyInput from '../UI/input/MyInput';
import "../../scss/Footer.scss"

const Footer = () => {

	return (

		<div className="footer">
			<div className="footer__mainColumn">
				<a href="/"><img src="/images/white-logo.svg" alt="" className="footer__mainColumn_logo" /></a>
				<div className="footer__mainColumn_text">
				Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
				</div>
				<div className="footer__mainColumn_input">
					<div className="footer__mainColumn_inputTitle">Подпишись на скидки и акции</div>
					<MyInput placeholder='Введите ваш E-mail'/>
				</div>
			</div>
			<div className="footer__column">
				<div className="footer__column_title">Меню сайта:</div>
				<div className="footer__column_element">О компании</div>
				<div className="footer__column_element">Доставка и оплата</div>
				<div className="footer__column_element">Возврат</div>
				<div className="footer__column_element">Контакты</div>
			</div>
			<div className="footer__column">
				<div className="footer__column_title">Категории:</div>
				<div className="footer__column_element">Бытовая химия</div>
				<div className="footer__column_element">Косметика и гигиена</div>
				<div className="footer__column_element">Товары для дома</div>
				<div className="footer__column_element">Товары для детей и мам</div>
				<div className="footer__column_element">Посуда</div>
			</div>
			<div className="footer__column">
				<div className="footer__column_title">Скачать прайс-лист:</div>
				<BigButton src='/images/download.svg'>Прайс-лист</BigButton>
				<div className="footer__column_element">Связь в мессенджерах:</div>
				<div className="footer__column_icons">
				<img src="/images/whatsapp-icon.svg" alt="" className="footer__column_whatsapp" />
				<img src="/images/telegram-icon.svg" alt="" className="footer__column_telegram" />
				</div>
			</div>
			<div className="footer__column">
				<div className="footer__column_title">Контакты:</div>
				<div className="footer__column_info">
					<div className="footer__column_infoNumber">+7 (777) 490-00-91</div>
					<div className="footer__column_infoWorktime">
						время работы: 9:00-20:00
					</div>
					<a className="footer__column_infoOrder">Заказать звонок</a>
				</div>
				<div className="footer__column_email">
					<div className="footer__column_emailTitle">opt.sultan@mail.ru</div>
					<div className="footer__column_emailSubtitle">На связи в любое время</div>
				</div>
				<div className="footer__column_icons">
					<img src="/images/visa-icon.svg" alt="" className="footer__column_icon" />
					<img src="/images/mastercard-icon.svg" alt="" className="footer__column_icon" />
				</div>
			</div>
		</div>

	);

};

export default Footer;