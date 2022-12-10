import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
	return (
		<>
			<header className="header">
				<div className="header__row">
					<nav className="header__menu menu">
						<div className="menu__icon burger-menu">
							<span></span>
						</div>
						<div className="menu__body">
							<HeaderNavigation />
						</div>
					</nav>
					<nav className="header__logo">
						<Link to="/">
							<h1>Nature</h1>
						</Link>
					</nav>
				</div>
			</header>
		</>
	)
}