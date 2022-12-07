import { IProduct } from "../models"
import { Link } from 'react-router-dom';

interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {
	return (
		<>
			<Link to={"" + product.id}>
				<div className="products__item">
					<div className="products__image">
						<img src={product.image} alt={product.title} />
					</div>
					<div className="products__title">
						{product.title}
					</div>
					<div className="products__price">{product.price} $</div>
				</div>
			</Link>
		</>
	)
}