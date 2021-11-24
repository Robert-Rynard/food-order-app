import React, { useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classNames from "classnames";
import styles from "./HeaderCartButton.module.css";
import { useCart } from "../../store/CartProvider.js";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useCart();

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce(
    (total, item) => total + +item.amount,
    0
  );

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={classNames(styles.button, { [styles.bump]: btnIsHighlighted })}
      onClick={props.onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
