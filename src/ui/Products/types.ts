export type ProductType = {
	uuid: string;
	name: string;
	description: string;
	price: number;
	image: ImageType;
};

export type ImageType = {
	src: string;
	alt: string;
};
