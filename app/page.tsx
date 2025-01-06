"use client";

import React, { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery";
import { IProduct } from "@/models/Product";
import { apiClient } from "@/lib/api-client";
import SkeletonProductCard from "./components/SkeletonLoading";

export default function Home() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await apiClient.getProducts();
				setProducts(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching products:", error);
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	return (
		<main className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">ImageKit Shop</h1>

			{loading ? (
				// <div className=" card  flex-row gap-8">
				// 	<div className="skeleton h-96 w-64"></div>
				// 	<div className="skeleton h-96 w-64"></div>
				// 	<div className="skeleton h-96 w-64"></div>
				// </div>
				<SkeletonProductCard />
			) : (
				<ImageGallery products={products} />
			)}
		</main>
	);
}
