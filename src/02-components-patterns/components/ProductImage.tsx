import { useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

interface Props {
    img?: string;
    className?: string;}

export const ProductImage = ({ img, className }:Props) => {
    const { product } = useContext(ProductContext);
    const image = img || product.img || noImage;
  
    return (
      <img
        className={`${styles.productImg} ${className}`}
        src={image}
        alt="Product"
      />
    );
  };