import React from 'react';
import ContentCatalog from '../content-catalog/ContentCatalog';
import ContentField from '../content-field/ContentField';

const ContentContainer = () => {

	return (

		<div className="content__container">
			<ContentCatalog/>
			<ContentField/>
		</div>

	);

};

export default ContentContainer;