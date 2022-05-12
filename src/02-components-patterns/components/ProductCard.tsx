import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProducts";
import noImage from "../assets/no-image.jpg";

export default function ProductCard() {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src="./coffee-mug.png" alt="" />
      {/*  <img className={styles.productImg} src={noImage} alt="" /> */}
      <span className={styles.productDescription}>Coffe mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
}
