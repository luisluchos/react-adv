import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

import { products } from "../data/products";

const product = products[0];

export default function ShoppingPage() {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div>
        <ProductCard
          product={product}
          className="bg-dark"
          key={product.id}
          initialValues={{ count: 4, maxCount: 10 }}
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" style={{ fontWeight: "bold" }} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
}
