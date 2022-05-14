import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
interface Props {
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}
export const ProductTitle = ({ name, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {name ? name : product.name}
    </span>
  );
};
