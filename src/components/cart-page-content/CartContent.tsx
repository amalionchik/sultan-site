import React from 'react';
import DeleteButton from '../UI/delete-button/DeleteButton';
import "../../scss/CartContent.scss"
import ContentElement from './content-element/ContentElement';
import BigButton from '../UI/big button/BigButton';

const CartContent = () => {

	return (

		<div className="contentCart">
			<div className="contentCart__section">
				<div className="contentCart__section_parent">Главная</div>
				<img src="/images/line.svg" alt="" />
				<div className="contentCart__section_child">Корзина</div>
			</div>
			<div className="contentCart__title">
				<div className="contentCart__title_text">Корзина</div>
				<img src="/images/large-line.svg" alt="" className="contentCart__largeline" />
			</div>
			<div className="contentCart__field">
				<ContentElement/>
				<ContentElement/>
				<ContentElement/>
				<ContentElement/>
			</div>
			<div className="contentCart__order">
				<BigButton>Оформить заказ</BigButton>
				<div className="contentCart__order_price">1 348,76 ₸</div>
			</div>
		</div>

	);

};

export default CartContent;