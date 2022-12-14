import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAnimate } from '../hooks/useAnimate';

export function AboutPage() {
	useAnimate()
	return (
		<div className='about-page'>
			<div className="wrapper" >
				<Header />
				<main className="content">
					<div className="aboutus__image"><img src="img/about.jpg" alt="" /></div>
					<section className="aboutus">
						<div className="container">
							<div className="aboutus__block animated-item">
								<h2 className="aboutus__title title animated-item">
									<span>About us</span>
								</h2>
								<div className="aboutus__text animated-item">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rem dolore ipsum tempora? Id quas
									assumenda ex perferendis fugiat asperiores rem ab, sint repellendus quod itaque dolore. Magni,
									veniam ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rem dolore ipsum
									tempora? Id quas
									assumenda ex perferendis fugiat asperiores rem ab, sint repellendus quod itaque dolore. Magni,
									veniam ratione.
								</div>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div >
		</div>
	)
}