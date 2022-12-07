import React from 'react';
import { useBurger } from '../hooks/burger';
import { Product } from '../components/Product';
import { products } from '../data/products';

export function ShopOutlet() {
	useBurger()
	return (
		<>
			<div className="products__items">
				{products.map(product => <Product product={product} key={product.id} />)}
			</div>
		</>
	)
}