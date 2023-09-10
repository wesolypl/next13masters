import Image from "next/image";
import type { ImageType } from "./types";

export const ProductsListItemImage = (image: ImageType) => {
	return (
		<figure className="group flex h-80 overflow-hidden">
			<Image
				width={300}
				height={500}
				src={image.src}
				alt={image.alt}
				className="object-cover transition-transform group-hover:scale-110"
			/>
		</figure>
	);
};
