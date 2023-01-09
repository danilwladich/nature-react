import { useEffect } from 'react';


export function useAnimate() {

	useEffect(() => {


		const animatedItems = document.querySelectorAll<HTMLElement>('.animated-item')
		window.addEventListener('scroll', animateOnScroll);
		animateOnScroll();
		function animateOnScroll() {
			if (animatedItems.length > 0) {
				for (let index = 0; index < animatedItems.length; index++) {
					const animatedItem: HTMLElement = animatedItems[index];
					const animatedItemHeight: number = animatedItem.offsetHeight;
					const animatedItemOffsetTop: number = offsetTop(animatedItem);
					const animatedStart: number = 4;

					let animatedItemPoint: number = window.innerHeight - animatedItemHeight / animatedStart;
					if (animatedItemHeight > window.innerHeight) {
						animatedItemPoint = window.innerHeight - window.innerHeight / animatedStart;
					}

					if ((window.pageYOffset > animatedItemOffsetTop - animatedItemPoint) && window.pageYOffset < (animatedItemOffsetTop + animatedItemHeight)) {
						animatedItem.classList.add('animate');
					}
				}
			}
			function offsetTop(el: HTMLElement) {
				const rect: DOMRect = el.getBoundingClientRect();
				const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
				return rect.top + scrollTop;
			}
		}


	}, [])

}