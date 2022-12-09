import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/products';


export function ProductPage() {
	const { products, loading } = useProducts()
	const params = useParams();
	const productId = params.id as unknown;
	const product = products.find(p => p.id == productId as number);
	if (loading) {
		return <div className='products__loading'><div></div><div></div><div></div><div></div></div>
	}
	if (product === undefined) {
		return <div className='product__not-found'>Product not found <br />:/</div>
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
							<div className="star-rating"><div className="star" style={{ width: rating }}></div></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}