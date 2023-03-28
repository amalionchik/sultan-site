import React from 'react';

const ContentHeader = () => {

	return (

		<div className="content__header">
			<div className="content__title">косметика и гигиена</div>
			<div className="content__sort">
				<div className="content__sort_title">Сортировка:</div>
				<ul className="content__sort_ul1">
					<li className="content__sort_li2">По названию</li>
					{/* <ul className="content__sort_ul2">
						<li className="content__sort_li3">По убыванию</li>
						<li className="content__sort_li3">По возрастанию</li>
					</ul>
					<li className="content__sort_li2">По цене</li>
					<ul className="content__sort_ul2">
						<li className="content__sort_li3">По убыванию</li>
						<li className="content__sort_li3">По возрастанию</li>
					</ul> */}
				</ul>
			</div>
		</div>

	);

};

export default ContentHeader;