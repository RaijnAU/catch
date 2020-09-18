export type Product = {
	id: string;
	imageUrl: string;
	name: string;
	quantityAvailable: number;
	retailPrice: number;
	salePrice: number;
};

export type ProductSort = {
	key?: string;
	descending?: boolean;
};
