import { ProductsListItem } from "./ProductsListItem";
import type { ProductType } from "./types";

type ProductsListType = {
	products: ProductType[];
};

export const ProductsList = (props: ProductsListType) => {
	const { products } = props;

	const mappedProductsList = products.map((product) => <ProductsListItem key={product.uuid} {...product} />);
	return (
		<section>
			<ul data-testid="products-list" className="flex flex-1 flex-wrap px-2 py-8">
				{mappedProductsList}
			</ul>
		</section>
	);
};
