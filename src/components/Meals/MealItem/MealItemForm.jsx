import React, { useRef } from "react";

import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const amount = amountRef.current.value;

    if (amount.trim().length === 0) return;
    props.onAddToCart(+amount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
        ref={amountRef}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
