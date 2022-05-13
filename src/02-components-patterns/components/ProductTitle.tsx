import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ name }: { name?: string }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>
      {name ? name : product.name}
    </span>
  );
};
