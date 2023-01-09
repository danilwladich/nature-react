import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useProducts } from '../hooks/useProducts';

export function ProductPage() {
	const productId = useParams().id;
	const { products, loading } = useProducts()
	const product = products.find(p => p.id === +productId!)
	if (loading) {
		return <div className='products__loading'><div></div><div></div><div></div><div></div></div>
	}
	return (
		<>
			<div className='shop-page'>
				<div className="wrapper" >
					<Header />
					<main className="content">
						<div className="products__bg"><img src="img/shop.jpg" alt="product bg" /></div>
						<section className="products">
							<div className="container big">
								{product
									? <div className="product__item">
										<div className="product__image">
											<img src={product.image} alt={product.title} />
										</div>
										<div className="product__block">
											<div className="product__title">
												<p>{product.category}</p>
												<p>{product.title}</p>
											</div>
											<div className="product__price">${product.price}</div>
											<div className="product__description">
												<p>{product.description}</p>
												<div className="star-rating"><div className="star" style={{ width: (product.rating.rate * 100 / 5 + "%") }}></div></div>
											</div>
										</div>
									</div>
									: <div className='product__not-found'>Product not found <br />:/</div>}
							</div>
						</section>
					</main>
					<Footer />
				</div >
			</div>
		</>
	);
}