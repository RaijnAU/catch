import React from "react";
import ProductListItem from "./ProductListItem";
import Wrapper from "../../../../../.storybook/decorators/Wrapper";

import { Story, Meta } from "@storybook/react/types-6-0";

export default {
	title: "ProductPage/ProductListItem",
	component: ProductListItem,
	decorators: [Wrapper],
} as Meta;

const Template: Story = ({ product }) => (
	<ProductListItem product={product} />
);

export const Default = Template.bind({});
Default.args = {
	product: {
		id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
		name: "Buy Olaplex No. 3 Hair Perfector",
		salePrice: 3145,
		retailPrice: 5000,
		imageUrl:
			"https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
		quantityAvailable: 65,
	},
};

export const noRetail = Template.bind({});
noRetail.args = {
	product: {
		id: "0b8568ab-a74b-4af3-8af0-084307a3997d",
		name:
			"2 x Perfetto Coffee Capsules online - barista quality coffee at home",
		salePrice: 2900,
		retailPrice: 0,
		imageUrl:
			"https://s.catch.com.au/images/product/0001/1641/573bca084547f235173065_w200.jpg",
		quantityAvailable: 19,
	},
};

export const noRetailLowQuantity = Template.bind({});
noRetailLowQuantity.args = {
	product: {
		id: "67bd1339-2bb1-40e8-9bd1-487f0c48cafd",
		name:
			"20 x Oral-B Compatible Replacement Toothbrush Heads - Medium",
		salePrice: 1799,
		retailPrice: 0,
		imageUrl:
			"https://s.catch.com.au/images/product/0006/6865/5b273dd64ba98274529753_w200.jpg",
		quantityAvailable: 2,
	},
};

export const soldOut = Template.bind({});
soldOut.args = {
	product: {
		id: "a730c210-2790-448f-b880-6358a9f658e4",
		name: "Apple Genuine EarPods w/ Lightning Connector - White",
		salePrice: 2999,
		retailPrice: 4500,
		imageUrl:
			"https://s.catch.com.au/images/product/0004/4474/5acaf30d7b302105343281_w200.jpg",
		quantityAvailable: 0,
	},
};

export const soldOutNoRetail = Template.bind({});
soldOutNoRetail.args = {
	product: {
		id: "62ddd118-50a2-49fd-b071-0512d383285b",
		name: "Illuminate Me 3-Way Makeup Mirror w/ LED Lights - Silver",
		salePrice: 2659,
		retailPrice: 0,
		imageUrl:
			"https://s.catch.com.au/images/product/0002/2888/5a028878912ef587486128_w200.jpg",
		quantityAvailable: 0,
	},
};
