import React, {
	createContext,
	FC,
	useContext,
	useState,
} from "react";
import { ProductSort } from "../components/ProductPage/types";

const SortStateContext = createContext<ProductSort | undefined>(
	undefined,
);

const SortDispatchContext = createContext<Function | undefined>(
	undefined,
);

export const useSortState = () => {
	const context = useContext(SortStateContext);
	if (context === undefined) {
		throw new Error(
			"useSortState must be used within a SortProvider",
		);
	}
	return context;
};

export const useSortDispatch = () => {
	const context = useContext(SortDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useSortDispatch must be used within a SortProvider",
		);
	}
	return context;
};
export const useSort = () => [useSortState(), useSortDispatch()];

export const SortProvider: FC = ({ children }) => {
	const [state, setState] = useState<ProductSort>({});
	return (
		<SortStateContext.Provider value={state}>
			<SortDispatchContext.Provider value={setState}>
				{children}
			</SortDispatchContext.Provider>
		</SortStateContext.Provider>
	);
};
