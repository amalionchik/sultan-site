import React from 'react';
import "../../../scss/DeleteButton.scss"

const DeleteButton = () => {

	return (

		<button className="deleteBtn">
			<img src="/images/trash-bin.svg" alt="" className="content__catalog_deleteImg" />
		</button>

	);

};

export default DeleteButton;