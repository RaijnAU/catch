import { sortProductsBy, toDollarsAndCents } from "./utilities";

describe("product sorting", () => {
	const productA = {
		id: "a",
		name: "Product A",
		imageUrl: "imageA.jpg",
		quantityAvailable: 5,
		retailPrice: 850,
		salePrice: 300,
	};
	const productB = {
		id: "b",
		name: "Product B",
		imageUrl: "imageB.jpg",
		quantityAvailable: 3,
		retailPrice: 1000,
		salePrice: 750,
	};
	const productC = {
		id: "c",
		name: "Product C",
		imageUrl: "imageC.jpg",
		quantityAvailable: 20,
		retailPrice: 900,
		salePrice: 500,
	};
	test("no sort", () => {
		expect(
			sortProductsBy([productA, productB, productC], {}),
		).toEqual([productA, productB, productC]);
	});
	test("sort sale price ascending", () => {
		expect(
			sortProductsBy([productA, productB, productC], {
				key: "salePrice",
			}),
		).toEqual([productA, productC, productB]);
	});
	test("sort sale price descending", () => {
		expect(
			sortProductsBy([productA, productB, productC], {
				key: "salePrice",
				descending: true,
			}),
		).toEqual([productB, productC, productA]);
	});
	test("sort name ascending", () => {
		expect(
			sortProductsBy([productB, productC, productA], {
				key: "name",
			}),
		).toEqual([productA, productB, productC]);
	});
	test("sort name descending", () => {
		expect(
			sortProductsBy([productB, productC, productA], {
				key: "name",
				descending: true,
			}),
		).toEqual([productC, productB, productA]);
	});
});

describe("currency conversion", () => {
	test("converting cents to dollars and cents", () => {
		expect(toDollarsAndCents(304)).toEqual("$3.04");
		expect(toDollarsAndCents(2866)).toEqual("$28.66");
		expect(toDollarsAndCents(85190)).toEqual("$851.90");
		expect(toDollarsAndCents(22)).toEqual("$0.22");
		expect(toDollarsAndCents(0)).toEqual("$0.00");
	});
});
