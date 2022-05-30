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
          className="bg-dark"
          initialValues={{ count: 4, maxCount: 10 }}
          value={9}
        >
          {({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" style={{ fontWeight: "bold" }} />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}

              <p className="text-white">{count}</p>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
}
