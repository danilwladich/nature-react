import { IProduct } from "../models"
import { Link } from 'react-router-dom';

interface IProps {
	product: IProduct
}

export function Product({ product }: IProps) {
	return (
		<>
			<Link to={"/product/" + product.id} key={product.id}>
				<div className="products__item">
					<div className="products__image">
						<img src={product.image} alt={product.title} />
					</div>
					<div className="products__title">
						{product.title}
					</div>
					<div className="products__price">${product.price}</div>
				</div>
			</Link>
		</>
	)
}