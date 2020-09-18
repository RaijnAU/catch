import React from "react";
import Select from "./Select";
import Wrapper from "../../../.storybook/decorators/Wrapper";

import { Story, Meta } from "@storybook/react/types-6-0";

export default {
	title: "Components/Select",
	component: Select,
	decorators: [Wrapper],
} as Meta;

const Template: Story = ({ order }) => <Select order={order} />;

export const Default = Template.bind({});
Default.args = {
	order: {
		name: "Test",
		value: "",
		onChange: () => {},
		options: [
			{ label: "Item 1", value: "one" },
			{ label: "Item 2", value: "two" },
		],
	},
};

export const selected = Template.bind({});
selected.args = {
	order: {
		name: "Selected",
		value: "two",
		onChange: () => {},
		options: [
			{ label: "Item 1", value: "one" },
			{ label: "Item 2", value: "two" },
		],
	},
};

export const withDisabledItem = Template.bind({});
withDisabledItem.args = {
	order: {
		name: "Disabled",
		value: "",
		onChange: () => {},
		options: [
			{ label: "Select Item", value: "", disabled: true },
			{ label: "Valid Item", value: "item" },
		],
	},
};
