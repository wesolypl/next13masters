import { ProductsListItemImage } from "./ProductsListItemImage";
import type { ProductType } from "./types";
import { getMoney } from "@/utils";

export const ProductsListItem = (props: ProductType) => {
	const { name, price, image } = props;
	return (
		<li className="flex basis-full flex-col p-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
			<ProductsListItemImage {...image} />
			<h3>{name}</h3>
			<h4>{getMoney(price)}</h4>
		</li>
	);
};
