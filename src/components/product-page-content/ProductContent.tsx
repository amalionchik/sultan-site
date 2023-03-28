import React from 'react';
import ToCartButton from '../UI/button-to-cart/ToCartButton';
import Counter from '../UI/counter/Counter';
import Price from '../UI/price/Price';
import ProductContentAddition from './content-addition/ProductContentAddition';
import ProductContentDescription from './content-description/ProductContentDescription';
import ProductContentFeatures from './content-features/ProductContentFeatures';
import ProductContentProps from './content-props/ProductContentProps';

const ContentProduct = () => {

	return (

		<div className="contentProduct">
			<div className="contentProduct__element">
				<img src="/images/BigProduct1.png" alt="" className="contentProduct__element_image" />
			</div>
			<div className="contentProduct__element">
				<div className="contentProduct__element_title">BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот</div>
				<div className="contentProduct__element_size">
					<img src="/images/weight.svg" alt="" className="contentProduct__element_sizeImg" />
					<div className="contentProduct__element_sizeValue">90 г</div>
				</div>
				<div className="contentProduct__buy">
					<div className="contentProduct__buy_element"><Price/></div>
					<div className="contentProduct__buy_element"><Counter/></div>
					<div className="contentProduct__buy_element"><ToCartButton/></div>
				</div>
				<ProductContentAddition/>
				<ProductContentProps/>
				<ProductContentDescription/>
				<img src="/images/medium-line.svg" alt="" className='contentProduct__mediumLine' />
				<ProductContentFeatures/>
			</div>
		</div>

	);

};

export default ContentProduct;