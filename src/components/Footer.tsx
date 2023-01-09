import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function Footer() {
	useScrollToTop();
	return (
		<>
			<footer className="footer">
				<address className="footer__copy">
					Warsaw 2022<br />
					<span>00-123 Street <br /> frosbutte1@gmail.com</span>
				</address>
				<nav className="footer__logo">
					<span className='logo__link'>Nature</span>
				</nav>
				<nav className="footer__nav">
					<div className="footer__link">
						<a rel="noreferrer" target="_blank" href="https://www.facebook.com/danilwladich/"><img src="img/icons/facebook.svg"
							alt="facebook" /></a>
					</div>
					<div className="footer__link">
						<a rel="noreferrer" href="https://www.instagram.com/danil_wladich/" target="_blank"><img src="img/icons/instagram.svg"
							alt="instagram" /></a>
					</div>
					<div className="footer__link">
						<a rel="noreferrer" href="/"><img src="img/icons/twitter.svg" alt="twitter" /></a>
					</div>
				</nav>
			</footer>
		</>
	)
}