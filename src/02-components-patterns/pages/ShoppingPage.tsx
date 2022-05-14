import React from "react";
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  name: "Coffee Mug",
  img: "./coffee-mug.png",
};

export default function ShoppingPage() {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{ backgroundColor: "blueviolet" }}
        >
          <ProductImage />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons />
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
