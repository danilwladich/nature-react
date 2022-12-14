import React from "react";
import Slider from "react-slick";

const settings = {
	dots: true,
	arrows: true,
	infinite: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export function MoreTopSlider() {
	return (
		<Slider {...settings}>
			<div className="more__block">
				<div className="more__title title"><span>Nature</span></div>
				<div className="more__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
					inventore neque ut ea, animi voluptate ducimus quae explicabo quasi quos perferendis repellendus
					atque, maxime consequatur ullam enim? Aut, voluptatibus quos. Facere cupiditate et rerum
					officiis nemo quaerat eligendi consequatur nisi delectus nulla eius quae esse ipsam magnam.
				</div>
			</div>
			<div className="more__block">
				<div className="more__title title"><span>Emotions</span></div>
				<div className="more__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
					inventore neque ut ea, animi voluptate ducimus quae explicabo quasi quos perferendis repellendus
					atque, maxime consequatur ullam enim? Aut, voluptatibus quos. Facere cupiditate et rerum
					officiis nemo quaerat eligendi consequatur nisi delectus nulla eius quae esse ipsam magnam, a
					temporibus debitis officia ex placeat! Ex alias asperiores temporibus incidunt praesentium. A!
				</div>
			</div>
			<div className="more__block">
				<div className="more__title title"><span>Beautiful</span></div>
				<div className="more__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
					inventore neque ut ea, animi voluptate ducimus quae explicabo quasi quos perferendis repellendus
					atque, maxime consequatur ullam enim? Aut, voluptatibus quos.</div>
			</div>
		</Slider>
	);
}

export function MoreBottomSlider() {
	return (
		<Slider {...settings}>
			<div className="more__block">
				<div className="more__title title"><span>Aesthetics</span></div>
				<div className="more__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
					inventore neque ut ea, animi voluptate ducimus quae explicabo quasi quos perferendis repellendus
					atque, maxime consequatur ullam enim? Aut, voluptatibus quos. Facere cupiditate et rerum
					officiis nemo quaerat eligendi consequatur nisi delectus nulla eius quae esse ipsam magnam.
				</div>
			</div>
			<div className="more__block">
				<div className="more__title title"><span>Colors</span></div>
				<div className="more__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
					inventore neque ut ea, animi voluptate ducimus quae explicabo quasi quos perferendis repellendus
					atque, maxime consequatur ullam enim? Aut, voluptatibus quos. Facere cupiditate et rerum
					officiis nemo quaerat eligendi consequatur nisi delectus nulla eius quae esse ipsam magnam, a
					temporibus debitis officia ex placeat! Ex alias asperiores temporibus incidunt praesentium. A!
				</div>
			</div>
			<div className="more__block">
				<div className="more__title title"><span>Peace</span></div>
				<div className="more__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
					inventore neque ut ea, animi voluptate ducimus quae explicabo quasi quos perferendis repellendus
					atque, maxime consequatur ullam enim? Aut, voluptatibus quos.</div>
			</div>
		</Slider>
	);
}