import React from 'react';
import BigButton from '../../UI/big button/BigButton';
import DeleteButton from '../../UI/delete-button/DeleteButton';
import MyInput from '../../UI/input/MyInput';

const ContentCatalog = () => {

	return (

		<div className="content__catalog">
			<div className="content__catalog_title">подбор по параметрам</div>
			<div className="content__catalog_options">
				<div className="content__catalog_price">
					<div className="content__price_title">Цена <strong>₸</strong></div>
					<div className="content__price_select">
						<input type="text" className="content__price_min" value={`0`} />
						<div className="content__price_separator">-</div>
						<input type="text" className="content__price_max" value={`10 000`}/>
					</div>
				</div>
				<div className="content__catalog_select">
					<div className="content__select_title">Производитель</div>
					<MyInput placeholder='Поиск...'/>
					<div className="content__select_checkbox">
						<input type="checkbox" name="" id="" className="content__checkbox_btn" />
						<div className="content__checkbox_name">Grifon</div>
						<div className="content__checkbox_count">(56)</div>
					</div>
					<div className="content__checkbox_showall">Показать все</div>
				</div>
				<img src="/images/line-big.svg" alt="" className="content__sepatator" />
				<div className="content__catalog_select">
					<div className="content__select_title">Уход</div>
					<MyInput placeholder='Поиск...'/>
					<div className="content__select_checkbox">
						<input type="checkbox" name="" id="" className="content__checkbox_btn" />
						<div className="content__checkbox_name">Уход за руками</div>
						<div className="content__checkbox_count">(21)</div>
					</div>
					<div className="content__checkbox_showall">Показать все</div>
				</div>
				<div className="content__catalog_buttons">
					<BigButton>Показать</BigButton>
					<DeleteButton/>
				</div>
			</div>
		</div>

	);

};

export default ContentCatalog;