import React, { FC } from "react";
import { Product } from "../types";
import styles from "./style.module.css";
import ProductListItem from "./ProductListItem/ProductListItem";

interface Props {
	isLoading: boolean;
	products: Product[];
}

/*
	Renders a product component using an array of objects via props
*/

const ProductList: React.FC<Props> = (props) => {
	const { isLoading, products } = props;

	return (
		<div className={styles.productList}>
			{isLoading ? (
				<div>Loading... </div>
			) : (
				products.map((item: Product) => (
					<ProductListItem key={item.id} product={item} />
				))
			)}
		</div>
	);
};

export default ProductList;
