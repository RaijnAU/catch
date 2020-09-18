import React from "react";
import ProductPageHeader from "./ProductPageHeader";
import Wrapper from "../../../../.storybook/decorators/Wrapper";

import { Story, Meta } from "@storybook/react/types-6-0";

export default {
	title: "ProductPage/Header",
	component: ProductPageHeader,
	decorators: [Wrapper],
} as Meta;

const Template: Story = ({ metaData }) => (
	<ProductPageHeader metaData={metaData} />
);

export const Default = Template.bind({});
Default.args = {
	metaData: {
		page: 0,
		pages: 10,
		query: "all items",
		total: 999,
	},
};
