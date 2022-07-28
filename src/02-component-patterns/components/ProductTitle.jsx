import { ProductContext } from "./ProductCard";
import { useContext } from "react";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title, className }) => {
    const { product } = useContext(ProductContext);
    return (
      <span className={`${styles.productDescription} ${className}`}>
        {title ? title : product.title}
      </span>
    );
  };