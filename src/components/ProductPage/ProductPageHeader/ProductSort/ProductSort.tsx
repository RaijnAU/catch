import React, { FC, FormEvent } from "react";
import { useSortDispatch } from "../../../../state/sort";
import Select from "../../../Select/Select";

const options = [
	{ label: "Sort by:", value: "", disabled: true },
	{ label: "Price (high-low)", value: "priceDescending" },
	{ label: "Price (low-high)", value: "price" },
];

const sorts = {
	price: { key: "salePrice" },
	priceDescending: { key: "salePrice", descending: true },
};

/*
	Renders generic Select dropdown component & passes function and fields
*/

const ProductSort: FC = () => {
	const setSort = useSortDispatch();

	const handleChange = (event: FormEvent<HTMLSelectElement>) => {
		setSort(sorts[event.currentTarget.value] || {});
	};
	const order = {
		name: "order",
		onChange: handleChange,
		options: options,
		value: "",
	};

	return <Select order={order} />;
};

export default ProductSort;
