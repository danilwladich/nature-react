import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';

export function useProducts() {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		async function fetchProducts() {
			try {
				setError('')
				setLoading(true)
				const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
				setProducts(response.data)
				setLoading(false)
			} catch (e: unknown) {
				const error = e as AxiosError
				setLoading(false)
				setError(error.message)
			}
		}
		fetchProducts()
	}, [])

	return { products, error, loading, setProducts }
}