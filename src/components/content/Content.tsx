import React from 'react';
import '../../scss/Content.scss'
import ContentAddition from './content-addition/ContentAddition';
import ContentContainer from './content-container/ContentContainer';
import ContentFilter from './content-filter/ContentFilter';
import ContentHeader from './content-header/ContentHeader';
import ContentPagination from './content-pagination/ContentPagination';
import ContentSection from './content-section/ContentSection';

const Content = () => {

	return (

		<div className="content">

			<ContentSection/>
			<ContentHeader/>
			<ContentFilter/>
			<ContentContainer/>
			<ContentPagination/>
			<ContentAddition/>

		</div>

	);

};

export default Content;