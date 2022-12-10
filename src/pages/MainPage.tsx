import { useAnimate } from '../hooks/animate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useBurger } from '../hooks/burger';

export function MainPage() {
	useAnimate()
	useBurger()
	return (
		<div className='main-page'>
			<div className="wrapper" >
				<Header />
				<div className="full-screen">
					<img src="img/bg-main.jpg" alt="" />
				</div>
				<main className="content">
					<section className="natureis">
						<div className="container">
							<div className="natureis__block animated-item">
								<h2 className="natureis__title title animated-item">
									<span>Nature is</span>
								</h2>
								<div className="natureis__text animated-item">
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
					<section className="gallery">
						<div className="container big">
							<div className="gallery__items">
								<div className="gallery__item gallery__item-2x2"><img src="img/img1.jpg" alt="" /></div>
								<div className="gallery__item"><img src="img/img2.jpg" alt="" /></div>
								<div className="gallery__item"><img src="img/img3.jpg" alt="" /></div>
								<div className="gallery__item"><img src="img/img4.jpg" alt="" /></div>
								<div className="gallery__item gallery__item-2x2"><img src="img/img5.jpg" alt="" /></div>
								<div className="gallery__item"><img src="img/img6.jpg" alt="" /></div>
								<div className="gallery__item gallery__item-2x1"><img src="img/img7.jpg" alt="" /></div>
								<div className="gallery__item"><img src="img/img8.jpg" alt="" /></div>
								<div className="gallery__item gallery__item-2x1"><img src="img/img9.jpg" alt="" /></div>
								<div className="gallery__item"><img src="img/img10.jpg" alt="" /></div>
							</div>
						</div>
					</section>
					<section className="discover">
						<div className="container">
							<div className="discover__block animated-item">
								<h2 className="discover__title title animated-item">
									<span>Discover the nature</span>
								</h2>
								<div className="discover__text animated-item">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur excepturi
									voluptate officiis eum, impedit totam ex quis ad, ab velit inventore tempora deleniti vel
									distinctio incidunt nihil aperiam blanditiis, autem consequuntur ipsum saepe qui! Id facere quod
									odit nobis dolor exercitationem velit ducimus. Eos eligendi consequatur veniam quas iusto
									dignissimos voluptates nemo recusandae natus culpa voluptate, ipsum similique hic ad in neque
									aliquam odio? At!
								</div>
								<div className="discover__button animated-item">
									<a href="https://www.instagram.com/danil_wladich/" target="_blank" rel="noreferrer">Ask question</a>
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