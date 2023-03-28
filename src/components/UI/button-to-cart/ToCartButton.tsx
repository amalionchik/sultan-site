import React from 'react';
import "../../../scss/ToCartButton.scss"

const ToCartButton = () => {

	return (

		<button className="toCartButton">
			<div className="toCartButtonText">В корзину</div>
			<img src="/images/white-cart.svg" alt="" />
		</button>

	);

};

export default ToCartButton;