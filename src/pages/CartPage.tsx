import React from 'react';
import CartContent from '../components/cart-page-content/CartContent';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';

const CartPage = () => {

	return (

		<>
			<Header/>
			<Navigation/>
			<CartContent/>
			<Footer/>
		</>

	);

};

export default CartPage;