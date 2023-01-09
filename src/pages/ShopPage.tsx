import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Products } from './../components/Products';
import { useProducts } from '../hooks/useProducts';



export function ShopPage() {
	const { loading } = useProducts()
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
								<Products />
							</div>
						</section>
					</main>
					<Footer />
				</div >
			</div>
		</>
	)
}