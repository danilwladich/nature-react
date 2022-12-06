import React from 'react';
import { Link } from 'react-router-dom'

export function HeaderNavigation() {
	return (
		<>
			<ul className="menu__list">
				<li>
					<Link to="/about" className="menu__link link__about">About us</Link>
				</li>
				<li>
					<Link to="/more" className="menu__link link__gallery">More</Link>
				</li>
				<li>
					<Link to="/shop" className="menu__link link__products">Shop</Link>
				</li>
				<li>
					<a href="https://www.instagram.com/danil_wladich/" rel="noreferrer" target="_blank"
						className="menu__link">Contact</a>
				</li>
			</ul>
		</>
	)
}