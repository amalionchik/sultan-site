import React from 'react';
import Counter from '../../UI/counter/Counter';
import DeleteButton from '../../UI/delete-button/DeleteButton';
import Price from '../../UI/price/Price';

const ContentElement = () => {

	return (

		<>
			<div className="contentCart__element">
				<div className="contentCart__element_image">
					<img src="/images/Product1.png" alt="" className='contentCart__element_img'/>
				</div>
				<div className="contentCart__element_info">
					<div className="contentCart__element_infoSize">
						<img src="/images/Volume.svg" alt="" className="contentCart__element_infoSizeImg" />
						<div className="contentCart__element_infoSizeValue">450 мл</div>
					</div>
					<a href="/product"><div className="contentCart__element_title">AOS средство для мытья посуды Crystal</div></a>
					<div className="contentCart__element_description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
					</div>
				</div>
				<img src="/images/large-vertical-line.svg" alt="" className="contentCart__element_line" />
				<Counter/>
				<img src="/images/large-vertical-line.svg" alt="" className="contentCart__element_line" />
				<Price/>
				<img src="/images/large-vertical-line.svg" alt="" className="contentCart__element_line" />
				<DeleteButton/>
			</div>
			<img src="/images/large-line.svg" alt="" className="contentCart__largeline" />
		</>

	);

};

export default ContentElement;