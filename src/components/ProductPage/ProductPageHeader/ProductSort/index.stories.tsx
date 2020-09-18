import React from "react";
import ProductSort from "./ProductSort";
import Wrapper from "../../../../../.storybook/decorators/Wrapper";

import { Story, Meta } from "@storybook/react/types-6-0";

export default {
	title: "ProductPage/ProductSort",
	component: ProductSort,
	decorators: [Wrapper],
} as Meta;

const Template: Story = (args) => <ProductSort {...args} />;

export const Default = Template.bind({});
