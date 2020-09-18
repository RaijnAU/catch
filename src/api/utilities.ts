import {
	Product,
	ProductSort,
} from "../components/ProductPage/types";

export const sortProductsBy = (
	products: Product[],
	{ key, descending }: ProductSort,
) => {
	if (!key) return products;
	const ascending = [...products].sort((a, b) =>
		a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0,
	);
	if (!descending) return ascending;
	return ascending.reverse();
};

export const toDollarsAndCents = (value: number): string => {
	const dollars = Math.floor(value / 100);
	const rawCents = value % 100;
	const cents = rawCents < 10 ? `0${rawCents}` : rawCents;
	return `$${dollars}.${cents}`;
};
