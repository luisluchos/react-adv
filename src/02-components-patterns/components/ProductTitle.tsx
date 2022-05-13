import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
interface Props {
    name?: string;
    className?: string;
}
export const ProductTitle = ({ name, className }:Props) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`}>
      {name ? name : product.name}
    </span>
  );
};
