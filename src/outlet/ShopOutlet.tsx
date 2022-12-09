import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from '../components/Pagination';
import { Product } from '../components/Product';
import { products } from '../data/products';
import { IProduct } from './../models';


export function ShopOutlet() {
	const [sortModal, setSortModal] = useState(false)
	const [productsList, setProductsList] = useState(products.map(product => <Product product={product} key={product.id} />))

	const [currentPage, setCurrentPage] = useState(1)
	const [productsPerPage, setProductsPerPage] = useState(8)

	const indexOfLastProduct = currentPage * productsPerPage
	const indexOfFirstproduct = indexOfLastProduct - productsPerPage
	const currentProducts = productsList.slice(indexOfFirstproduct, indexOfLastProduct)

	const paginate = (page: number) => {
		setCurrentPage(page)
	}

	document.addEventListener('click', function (event: any) {
		if (!event.target.closest('.products__sort-list') && !event.target.closest('.products__sort-title')) {
			setSortModal(false);
		};
	});

	function sortProducts(props: string) {
		const sortProducts = productsList.concat();
		if (props === 'priceasc') {
			setProductsList(sortProducts.sort((a, b) => a.props.product.price - b.props.product.price))
		}
		if (props === 'pricedsc') {
			setProductsList(sortProducts.sort((a, b) => a.props.product.price - b.props.product.price).reverse())
		}
		if (props === 'titleasc') {
			setProductsList(sortProducts.sort((a, b) => {
				const titleA = a.props.product.title.toUpperCase();
				const titleB = b.props.product.title.toUpperCase();
				if (titleA < titleB) {
					return -1;
				}
				if (titleA > titleB) {
					return 1;
				}
				return 0;
			}))
		}
		if (props === 'titledsc') {
			setProductsList(sortProducts.sort((a, b) => {
				const titleA = a.props.product.title.toUpperCase();
				const titleB = b.props.product.title.toUpperCase();
				if (titleA < titleB) {
					return 1;
				}
				if (titleA > titleB) {
					return -1;
				}
				return 0;
			}))
		}
		if (props === 'rateasc') {
			setProductsList(sortProducts.sort((a, b) => a.props.product.rating.rate - b.props.product.rating.rate))
		}
		if (props === 'ratedsc') {
			setProductsList(sortProducts.sort((a, b) => a.props.product.rating.rate - b.props.product.rating.rate).reverse())
		}
		setSortModal(prev => !prev)
	}
	return (
		<>
			<div className="products__sort">
				<div className='products__sort-title' onClick={() => { setSortModal(prev => !prev) }}><img src="img/icons/sort.png" alt="" />Sort by:</div>
				{sortModal && <ul className='products__sort-list'>
					<li className='products__sort-link' onClick={() => { sortProducts('priceasc') }}>price <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('pricedsc') }}>price <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('titleasc') }}>title <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('titledsc') }}>title <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('rateasc') }}>rate <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('ratedsc') }}>rate <span></span></li>
				</ul>}
			</div>
			<div className="products__items">
				{currentProducts}
			</div>
			<Pagination productsPerPage={productsPerPage} totalProducts={productsList.length} paginate={paginate} currentPage={currentPage} />
		</>
	)
}