import React from 'react';

const ProductContentProps = () => {

	return (

		<div className="contentProduct__props">
			<div className="contentProduct__prop">
				<div className="contentProduct__prop_title">Производитель:</div>
				<div className="contentProduct__prop_value">BioMio</div>
			</div>
			<div className="contentProduct__prop">
				<div className="contentProduct__prop_title">Бренд:</div>
				<div className="contentProduct__prop_value">BioMio</div>
			</div>
			<div className="contentProduct__prop">
				<div className="contentProduct__prop_title">Артикул:</div>
				<div className="contentProduct__prop_value">460404</div>
			</div>
			<div className="contentProduct__prop">
				<div className="contentProduct__prop_title">Кол-во в коробке:</div>
				<div className="contentProduct__prop_value">2</div>
			</div>
			<div className="contentProduct__prop">
				<div className="contentProduct__prop_title">Штрихкод:</div>
				<div className="contentProduct__prop_value">4604049097548</div>
			</div>
			<div className="contentProduct__prop">
				<div className="contentProduct__prop_title flex">
					Размер коробки
					<div className="contentProduct__prop_subtitle">(Д*Ш*В)</div>:
					</div>
				<div className="contentProduct__prop_value">10x10x10</div>
			</div>
			<div className="contentProduct__prop">
				<div className="contentProduct__prop_title">Вес коробки:</div>
				<div className="contentProduct__prop_value">1020 г</div>
			</div>
		</div>

	);

};

export default ProductContentProps;