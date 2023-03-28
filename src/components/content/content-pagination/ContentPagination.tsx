import React from 'react';

const ContentPagination = () => {

	return (

		<div className="content__pagination">
			<div className="content__pagination_previous">
				<img src="/images/arrow-previous.svg" alt="" />
			</div>
			<div className="content__pagination_pages">
				<div className="content__pagination_page content__pagination_active">1</div>
				<div className="content__pagination_page">2</div>
				<div className="content__pagination_page">3</div>
				<div className="content__pagination_page">4</div>
				<div className="content__pagination_page">5</div>
			</div>
			<div className="content__pagination_next">
				<img src="/images/arrow-next.svg" alt="" />
			</div>
		</div>

	);

};

export default ContentPagination;