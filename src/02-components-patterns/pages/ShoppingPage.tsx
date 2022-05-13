import React from "react";
import  { ProductCard ,ProductButtons, ProductImage, ProductTitle } from "../components";

const product = {
  id: "1",
  name: "Coffee Mug",
  img: "./coffee-mug.png",
}



export default function ShoppingPage() {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        <ProductCard product={product}>
          <ProductImage/>
          <ProductTitle />
          <ProductButtons/>
          </ProductCard>

       {/*    <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title name={'Mug edit name'} />
          <ProductCard.Buttons />
        </ProductCard> */}
      </div>
     
    </div>
  );
}
