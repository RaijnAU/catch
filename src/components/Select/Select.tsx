import React, { FC, FormEvent } from "react";
import styles from "./style.module.css";
import clsx from "clsx";

export interface SelectOption {
	disabled?: boolean;
	label: string;
	value: string;
}

interface Order {
	className?: string;
	name: string;
	onChange: (event: FormEvent<HTMLSelectElement>) => void;
	options: SelectOption[];
	value: string;
}

interface Props {
	order: Order;
}

/*
	Reusable component for selecting from a dropdown menu
*/

const Select: FC<Props> = ({ order }) => {
	const { className, name, onChange, value, options } = order;

	return (
		<select
			className={clsx(styles.select, className)}
			name={name}
			defaultValue={value}
			onChange={onChange}
		>
			{options.map((option) => (
				<option
					key={option.value}
					disabled={option.disabled}
					value={option.value}
				>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
