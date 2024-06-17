// 'use client' // an option...
// import React from "react";
// import styles from './ProductCard.module.css'

// const ProductCard = () => {
//   return (
//     <>
//       <div className={styles.cardContainer}>add to cart</div>
//     </>
//   );
// };

// export default ProductCard;

import React from "react";
import styles from "./ProductCard.module.css";
import AddToCart from "../AddToCart";

const ProductCard = () => {
  return (
      <div>
        <AddToCart />
      </div>
  );
};

export default ProductCard;
