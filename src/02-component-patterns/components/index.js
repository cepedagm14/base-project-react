import { ProductCard as ProductCardComponentHOC } from "./ProductCard";
import { ProductButon } from "./ProductButon";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButon } from "./ProductButon";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


export const ProductCard = Object.assign(ProductCardComponentHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Button: ProductButon
})