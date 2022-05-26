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
        /*   const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
    
          if (Math.max(productInCart.count + count, 0) > 0) {
            productInCart.count += count;
            return {
              ...oldShoppingCart,
              [product.id]: productInCart,
            };
          } */
    
          //delete product from cart
    
        /*   const { [product.id]: toDelete, ...restShoppingCart } = oldShoppingCart;
          return restShoppingCart; */
    
            if (count === 0) {
            const { [product.id]: toDelete, ...newShoppingCart } = oldShoppingCart;
            return newShoppingCart;
          }
          return { ...oldShoppingCart, [product.id]: { ...product, count } };
        });
      };
    
      console.log("shpping cart", shoppingCart);

      return { shoppingCart, onProductCountChange };

    }