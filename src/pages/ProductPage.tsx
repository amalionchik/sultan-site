import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';
import ContentProduct from '../components/product-page-content/ProductContent';
import '../scss/ContentProduct.scss'

const ProductPage = () => {

	return (

		<>
			<Header/>
			<Navigation/>
			<ContentProduct/>
			<Footer/>
		</>

	);

};

export default ProductPage;