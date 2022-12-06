import { useEffect } from 'react';
import $ from "jquery";

export function useScrollToTop() {
	useEffect(() => {


		const body = $("html, body") as JQuery<HTMLElement>;
		function scrollToTop() {
			body.animate({ scrollTop: 0 }, 500);
		};
		const logo: HTMLElement = document.querySelector('.logo__link') as HTMLElement;
		logo.onclick = scrollToTop;


	});
}