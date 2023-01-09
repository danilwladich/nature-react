import { useEffect } from 'react';

export function useBurger() {

	useEffect(() => {

		function burgerMenuToggle() {
			burgerButton.classList.toggle('active');
			burgerBody.classList.toggle('active');
			bodyLock.classList.toggle('lock');
			window.scrollTo(0, 0);
		};
		function burgerMenuRemove() {
			burgerButton.classList.remove('active');
			burgerBody.classList.remove('active');
			bodyLock.classList.remove('lock');
		};
		const burgerButton: HTMLElement = document.querySelector('.burger-menu') as HTMLElement;
		const burgerBody: HTMLElement = document.querySelector('.menu__body') as HTMLElement;
		const bodyLock: HTMLElement = document.querySelector('body') as HTMLElement;
		const menuLinks = document.querySelectorAll<HTMLElement>('.menu__link,.header__logo');
		burgerButton.onclick = burgerMenuToggle;
		menuLinks.forEach(el => {
			el.onclick = burgerMenuRemove;
		})


	}, [])

}