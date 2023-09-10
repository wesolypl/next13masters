import type { ProductType } from "@/ui/Products/types";

export const products: ProductType[] = [
	{
		uuid: "6061fa00-e753-5e81-8c24-519f2b4b549d",
		name: "T-shirt 1",
		description: "",
		price: 9900,
		image: {
			src: "/product/product_1.jpg",
			alt: "T-shirt 1",
		},
	},
	{
		uuid: "ff236c42-9613-5d27-bd73-86eb81754b13",
		name: "T-shirt 2",
		description: "",
		price: 9900,
		image: {
			src: "/product/product_2.jpg",
			alt: "T-shirt 2",
		},
	},
	{
		uuid: "ac7c89cc-c51b-5392-9725-f62b08d57484",
		name: "Socks",
		description: "",
		price: 4590,
		image: {
			src: "/product/product_3.jpg",
			alt: "Socks",
		},
	},
	{
		uuid: "af1da636-5585-59a5-90f4-c7c39559f84d",
		name: "Pants",
		description: "",
		price: 19900,
		image: {
			src: "/product/product_4.jpg",
			alt: "Pants",
		},
	},
];
