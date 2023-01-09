import { useEffect } from 'react';

export function useScrollToTop() {
	useEffect(() => {


		function scrollToTop() {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		};
		const logo: HTMLElement = document.querySelector('.logo__link') as HTMLElement;
		logo.onclick = scrollToTop;


	});
}