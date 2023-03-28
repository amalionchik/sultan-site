import React from 'react';
import ToCartButton from '../../../UI/button-to-cart/ToCartButton';

const ContentProduct = () => {

	return (

		<div className="content__product">
			<img className="content__product_image" src="/images/Product1.png" alt="" />
			<div className="content__product_descriptionProps">
				<div className="content__product_size">
					<div className="content__product_sizeImage">
						<img src="/images/Volume.svg" alt="" />
					</div>
					<div className="content__product_sizeValue">450 мл</div>
				</div>
				<a href="/product"><div className="content__product_title">AOS средство для мытья посуды Crystal</div></a>
				<div className="content__product_props">
					<div className="content__product_prop">
						<div className="content__product_propText">Штрихкод:</div>
						<div className="content__product_propValue" id='barcode'>4604049097548</div>
					</div>
					<div className="content__product_prop">
						<div className="content__product_propText">Производитель:</div>
						<div className="content__product_propValue" id='producer'>Нэфис</div>
					</div>
					<div className="content__product_prop">
						<div className="content__product_propText">Бренд:</div>
						<div className="content__product_propValue" id='brand'>AOS</div>
					</div>
					<div className="content__product_prop">
						<div className="content__product_propText">Тип ухода:</div>
						<div className="content__product_propValue" id='brand'>Гигиеническая продукция</div>
					</div>
				</div>
				<div className="content__product_bottom">
					<div className="content__product_price" id='price'>48,76 ₸</div>
					<ToCartButton/>
				</div>
			</div>
		</div>

	);

};

export default ContentProduct;