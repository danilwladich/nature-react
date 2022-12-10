import React from 'react';
import { useBurger } from '../hooks/burger';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MoreTopSlider, MoreBottomSlider } from '../components/MoreSlider';

export function MorePage() {
	useBurger()
	return (
		<div className='more-page'>
			<div className="wrapper" >
				<Header />
				<div className="full-screen">
					<img src="img/more.jpg" alt="" />
				</div>
				<main className="content">
					<section className="more-top">
						<div className="more">
							<div className="container">
								<div className="more__slider">
									<MoreTopSlider />
								</div>
							</div>
						</div>
					</section>
					<section className="pine">
						<div className="container">
							<div className="pine__row">
								<div className="pine__image"><img src="img/pine.jpg" alt="" /></div>
								<div className="pine__block">
									<div className="pine__title title"><span>Pine</span></div>
									<div className="pine__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
										non adipisci rem maxime eligendi reiciendis voluptatem alias ab iusto delectus fugiat laudantium
										quae consequuntur aliquid amet, quod perferendis, itaque voluptatum.
										Non eveniet molestias in nihil! Sed beatae porro sint laborum consequatur dolores magnam
										necessitatibus omnis qui, odio rerum vero. Qui, ab quibusdam. Aliquam amet, distinctio aut
										exercitationem libero perspiciatis qui.
										Dolorum ut veniam voluptates consequuntur incidunt aperiam. Commodi amet nemo sed fuga. Eos ipsa
										quasi assumenda eaque, corrupti labore voluptatibus ex quis tempore, adipisci fugit? Aliquam
										reprehenderit magnam quae odit!</div>
								</div>
							</div>
						</div>
					</section>
					<section className="more-bottom">
						<div className="more">
							<div className="container">
								<div className="more__slider">
									<MoreBottomSlider />
								</div>
							</div>
						</div>
					</section>
					<section className="conifers">
						<div className="container">
							<div className="conifers__row">
								<div className="conifers__block">
									<div className="conifers__title title"><span>Conifers</span></div>
									<div className="conifers__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
										non adipisci rem maxime eligendi reiciendis voluptatem alias ab iusto delectus fugiat laudantium
										quae consequuntur aliquid amet, quod perferendis, itaque voluptatum.
										Non eveniet molestias in nihil! Sed beatae porro sint laborum consequatur dolores magnam
										necessitatibus omnis qui, odio rerum vero. Qui, ab quibusdam. Aliquam amet, distinctio aut
										exercitationem libero perspiciatis qui.
										Dolorum ut veniam voluptates consequuntur incidunt aperiam. Commodi amet nemo sed fuga. Eos ipsa
										quasi assumenda eaque, corrupti labore voluptatibus ex quis tempore, adipisci fugit? Aliquam
										reprehenderit magnam quae odit!</div>
								</div>
								<div className="conifers__image"><img src="img/conifers.jpg" alt="" /></div>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div >
		</div>
	)
}