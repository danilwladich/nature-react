import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { Product } from './Product';
import { useProducts } from '../hooks/useProducts';


export function Products() {
	const { products, error, loading, setProducts } = useProducts()

	const [sortModal, setSortModal] = useState(false)

	const [currentPage, setCurrentPage] = useState(sessionStorage.getItem('shopCurrentPage') ? +sessionStorage.getItem('shopCurrentPage')! : 1)
	const [productsPerPage] = useState(8)
	const indexOfLastProduct = currentPage * productsPerPage
	const indexOfFirstproduct = indexOfLastProduct - productsPerPage
	const currentProducts = products.slice(indexOfFirstproduct, indexOfLastProduct)

	const paginate = (page: number) => {
		sessionStorage.setItem('shopCurrentPage', page + '')
		setCurrentPage(page)
		window.scrollTo(0, 0)
	}

	document.addEventListener('click', (e: Event) => {
		const target = e.target as HTMLElement;
		if (!target.closest('.products__sort-list') && !target.closest('.products__sort-title')) {
			setSortModal(false);
		};
	});

	function sortProducts(props: string) {
		setCurrentPage(1)
		const sortProducts = products.concat();
		if (props === 'priceasc') {
			setProducts(sortProducts.sort((a, b) => a.price - b.price))
		}
		if (props === 'pricedsc') {
			setProducts(sortProducts.sort((a, b) => a.price - b.price).reverse())
		}
		if (props === 'titleasc') {
			setProducts(sortProducts.sort((a, b) => {
				const titleA = a.title.toUpperCase();
				const titleB = b.title.toUpperCase();
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
			setProducts(sortProducts.sort((a, b) => {
				const titleA = a.title.toUpperCase();
				const titleB = b.title.toUpperCase();
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
			setProducts(sortProducts.sort((a, b) => a.rating.rate - b.rating.rate))
		}
		if (props === 'ratedsc') {
			setProducts(sortProducts.sort((a, b) => a.rating.rate - b.rating.rate).reverse())
		}
		setSortModal(prev => !prev)
	}
	return (
		<>
			{!loading && !error && <div className="products__sort">
				<div className='products__sort-title' onClick={() => { setSortModal(prev => !prev) }}><img src="img/icons/sort.png" alt="" />Sort by:</div>
				{sortModal && <ul className='products__sort-list'>
					<li className='products__sort-link' onClick={() => { sortProducts('priceasc') }}>price <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('pricedsc') }}>price <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('titleasc') }}>title <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('titledsc') }}>title <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('rateasc') }}>rate <span></span></li>
					<li className='products__sort-link' onClick={() => { sortProducts('ratedsc') }}>rate <span></span></li>
				</ul>}
			</div>}
			{loading && <div className='products__loading'><div></div><div></div><div></div><div></div></div>}
			{error && <div className='products__error'>{error} <br /> :/</div>}
			<div className="products__items">
				{currentProducts.map(p => (<Product key={p.id} product={p} />))}
			</div>
			{!loading && !error && <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} currentPage={currentPage} />}
		</>
	)
}