import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
