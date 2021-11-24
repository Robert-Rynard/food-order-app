import HeaderCartButton from "./HeaderCartButton";
import React from "react";
import mealImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};

export default Header;
