import React from 'react';
import "../../../scss/Counter.scss"

const Counter = () => {

	return (

		<div className="counter">
			<button className="counter__decrement">-</button>
			<div className="counter__value">1</div>
			<button className="counter__increment">+</button>
		</div>

	);

};

export default Counter;