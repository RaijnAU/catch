import React, { FC } from "react";
import { Product } from "../../types";
import { toDollarsAndCents } from "../../../../api/utilities";
import clsx from "clsx";
import styles from "./style.module.css";

interface Props {
	product: Product;
}

/*
	Renders individual product component
*/

const ProductListItem: FC<Props> = ({ product }) => {
	const {
		imageUrl,
		name,
		quantityAvailable,
		retailPrice,
		salePrice,
	} = product;

	return (
		<div className={styles.itemContainer}>
			<img className={styles.itemPicture} src={imageUrl} alt="" />
			{quantityAvailable === 0 && (
				<p className={styles.nostock}>Sold Out!</p>
			)}
			<p className={styles.itemName}>{name}</p>
			{retailPrice > 0 && (
				<p className={styles.itemRetail}>
					<del>{toDollarsAndCents(retailPrice)}</del>
				</p>
			)}
			<p
				className={clsx(
					styles.itemSale,
					quantityAvailable === 0 && styles.soldoutPrice,
				)}
			>
				{toDollarsAndCents(salePrice)}
			</p>
			{quantityAvailable > 0 && quantityAvailable < 9 && (
				<p className={styles.itemQuantity}>
					Be quick! Only {quantityAvailable} left
				</p>
			)}
		</div>
	);
};

export default ProductListItem;
