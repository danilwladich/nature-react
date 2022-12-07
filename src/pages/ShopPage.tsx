import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useBurger } from '../hooks/burger';
import { Outlet } from 'react-router-dom';

export function ShopPage() {
	useBurger()
	return (
		<>
			<div className='shop-page'>
				<div className="wrapper" >
					<Header />
					<div className="content">
					<div className="products__bg"><img src="img/shop.jpg" alt="" /></div>
						<section className="products">
							<div className="container big">
									<Outlet />
							</div>
						</section>
					</div>
					<Footer />
				</div >
			</div>
		</>
	)
}