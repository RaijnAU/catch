import React, { FC } from "react";
import styles from "./style.module.css";
import logo from "../../../img/logo.jpg";
import ProductSort from "./ProductSort/ProductSort";
import { Heading } from "../ProductPage";

interface Props {
	/**
	 * Pagination, total items, and query
	 */
	metaData: Heading;
}

/*
	Displays product page header container company logo, metadata for product data being displayed & component to sort data
*/

const ProductPageHeader: FC<Props> = ({ metaData }) => {
	const { page, pages, query, total } = metaData;

	return (
		<div className={styles.header}>
			<img src={logo} alt="logo" />
			<div className={styles.metadata}>
				<h4 className={styles.query}>{query}</h4>
				<p className={styles.text}>
					Page {page} of {pages} ({total} items)
				</p>
			</div>
			<ProductSort />
		</div>
	);
};

export default ProductPageHeader;
