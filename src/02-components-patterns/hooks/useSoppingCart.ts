import { useState } from "react";
import { Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
  count: number;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
    console.log({ count });

    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...newShoppingCart } = oldShoppingCart;
        return newShoppingCart;
      }
      return { ...oldShoppingCart, [product.id]: { ...product, count } };
    });
  };

  console.log("shpping cart", shoppingCart);

  return { shoppingCart, onProductCountChange };
};
