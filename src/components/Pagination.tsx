import React from 'react';

interface IProps {
	productsPerPage: number
	totalProducts: number
	paginate: (arg: number) => void
	currentPage: number
}

export function Pagination({ productsPerPage, totalProducts, paginate, currentPage }: IProps) {
	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<>
			<nav className='paginations'>
				{currentPage !== 1 && <div className='paginations__prev' onClick={() => { paginate(currentPage - 1) }}>Prev page</div>}
				<ul className='paginations__numbers'>
					{pageNumbers.map(page => (
						<li key={page}>
							<div className={'paginations__number ' + (page === currentPage ? 'active' : '')} onClick={() => { paginate(page) }}>{page}</div> <br />
						</li>
					))}
				</ul>
				{currentPage !== pageNumbers[pageNumbers.length - 1] && <div className='paginations__next' onClick={() => { paginate(currentPage + 1) }}>Next page</div>}
			</nav>
		</>
	)
}