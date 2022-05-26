
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useSoppingCart';
import { products } from "../data/products";


export default function ShoppingPage() {

  const {onProductCountChange, shoppingCart} = useShoppingCart()

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            key={product.id}
            onChange={(e) => onProductCountChange(e)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" style={{ fontWeight: "bold" }} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            onChange={(e) => onProductCountChange(e)}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
