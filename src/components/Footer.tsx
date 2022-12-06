import React from 'react';
import { useScrollToTop } from './../hooks/scrollToTop';

export function Footer() {
	useScrollToTop();
	return (
		<>
			<footer className="footer">
				<div className="footer__copy">
					Warsaw 2022<br />
					<span>00-123 Street <br /> frosbutte1@gmail.com</span>
				</div>
				<div className="footer__logo">
					<span className='logo__link'>Nature</span>
				</div>
				<nav className="footer__nav">
					<div className="footer__link">
						<a rel="noreferrer" target="_blank" href="https://www.facebook.com/danilwladich/"><img src="img/icons/facebook.svg"
							alt="" /></a>
					</div>
					<div className="footer__link">
						<a rel="noreferrer" href="https://www.instagram.com/danil_wladich/" target="_blank"><img src="img/icons/instagram.svg"
							alt="" /></a>
					</div>
					<div className="footer__link">
						<a rel="noreferrer" href="/"><img src="img/icons/twitter.svg" alt="" /></a>
					</div>
				</nav>
			</footer>
		</>
	)
}