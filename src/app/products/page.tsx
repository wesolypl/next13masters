import { products } from "@/data/products";
import { ProductsList } from "@/ui/Products/ProductsList";

const Products = () => {
	return (
		<section>
			<h1>Products</h1>
			<ProductsList products={products} />
		</section>
	);
};

export default Products;
