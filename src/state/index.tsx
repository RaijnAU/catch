import React, { FC } from "react";
import { SortProvider } from "./sort";

const State: FC = ({ children }) => (
	<SortProvider>{children}</SortProvider>
);

export default State;
