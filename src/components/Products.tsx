import { IProduct } from "../models"
import { Link } from 'react-router-dom';

interface ProductProps {
	products: IProduct[]
}

export function Products({ products }: ProductProps) {
	return (
		<>
			{products.map((product: any) => (
				<Link to={"" + product.id} key={product.id}>
					<div className="products__item">
						<div className="products__image">
							<img src={product.image} alt={product.title} />
						</div>
						<div className="products__title">
							{product.title}
						</div>
						<div className="products__price">{product.price} $</div>
					</div>
				</Link>))}
		</>
	)
}