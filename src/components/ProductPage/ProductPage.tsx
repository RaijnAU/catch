import React, { useEffect, useMemo, useState } from "react";
import { getProducts } from "../../api/requests";
import { useSortState } from "../../state/sort";
import ProductList from "./ProductList/ProductList";
import ProductPageHeader from "./ProductPageHeader/ProductPageHeader";
import { sortProductsBy } from "../../api/utilities";

export interface Heading {
	page?: number;
	pages?: number;
	query?: string;
	total?: number;
}

/*
	Component fetches product data from server and renders both the page header and product list
*/

const ProductPage: React.FC = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [heading, setHeading] = useState<Heading>({});
	const sort = useSortState();

	useEffect(() => {
		async function getData() {
			const response = await getProducts();
			setProducts(response.results);
			setHeading(response.metadata);
			setIsLoading(false);
		}
		getData();
	}, []);

	const sortedProducts = useMemo(
		() => sortProductsBy(products, sort),
		[products, sort],
	);

	return (
		<>
			<ProductPageHeader metaData={heading} />
			<ProductList isLoading={isLoading} products={sortedProducts} />
		</>
	);
};

export default ProductPage;
