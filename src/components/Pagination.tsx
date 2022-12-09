import React, { useState } from 'react';

interface IPagination {
	productsPerPage: number
	totalProducts: number
	paginate: any
	currentPage: number
}

export function Pagination({ productsPerPage, totalProducts, paginate, currentPage }: IPagination) {
	const [prevButton, setPrevButton] = useState(false)
	const [nextButton, setNextButton] = useState(true)

	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<>
			<nav className='paginations'>
				{prevButton && <div className='paginations__prev' onClick={() => { paginate(currentPage - 1); if (currentPage - 1 === 1) { setPrevButton(false) } else { setPrevButton(true) }; setNextButton(true) }}>Prev page</div>}
				<ul className='paginations__numbers'>
					{pageNumbers.map(page => (
						<li key={page}>
							<div className='paginations__number' onClick={() => { paginate(page); if (page === 1) {setPrevButton(false)} else {setPrevButton(true)} if (page === pageNumbers[pageNumbers.length - 1]) {setNextButton(false)} else {setNextButton(true)} }}>{page}</div> <br />
						</li>
					))}
				</ul>
				{nextButton && <div className='paginations__next' onClick={() => { paginate(currentPage + 1); if (currentPage + 1 === pageNumbers[pageNumbers.length - 1]) { setNextButton(false) } else { setNextButton(true) }; setPrevButton(true) }}>Next page</div>}
			</nav>
		</>
	)
}