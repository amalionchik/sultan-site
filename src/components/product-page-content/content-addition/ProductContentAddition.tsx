import React from 'react';

const ProductContentAddition = () => {

	return (

		<div className="contentProduct__addition">
			<button className="contentProduct__addition_share">
				<img src="/images/share.svg" alt="" />
			</button>
			<div className="contentProduct__addition_text">
				При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
			</div>
			<button className="contentProduct__addition_button">
				<div className="contentProduct__addition_buttonText">Прайс-лист</div>
				<img src="/images/black-download.svg" alt="" className="contentProduct__addition_buttonImg" />
			</button>
		</div>

	);

};

export default ProductContentAddition;