import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
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
          key={product.id}
          product={product}
          initialValues={{ count: 4, maxCount: 10 }}
          value={9}
        >
          {({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage />
              <ProductTitle/>
              <ProductButtons  />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
}
