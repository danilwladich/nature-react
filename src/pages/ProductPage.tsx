import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import $ from "jquery";


export function ProductPage() {
	const params = useParams();
	const productId = params.id as unknown;
	// eslint-disable-next-line
	const product = products.find(p => p.id == productId as number);

	if (product === undefined) {
		return <div className='product__not-found'>Product not found :/</div>;
	} else {
		const rating: string = product.rating.rate * 100 / 5 + "%";
		return (
			<>
				<div className="product__item">
					<div className="product__image">
						<img src={product.image} alt={product.title} />
					</div>
					<div className="product__block">
						<div className="product__title">
							<p>{product.category}</p>
							<p>{product.title}</p>
						</div>
						<div className="product__price">{product.price} $</div>
						<div className="product__description">
							<p>{product.description}</p>
							<p><span><div className="star-rating"><div className="star" style={{width: rating}}></div></div></span></p>
						</div>
					</div>
				</div>
			</>
		);
	}
}