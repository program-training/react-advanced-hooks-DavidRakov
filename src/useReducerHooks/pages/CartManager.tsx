import { useReducer } from "react";
import { cartReducer } from "../utils/Reducer";
import { items } from "../utils/items";
import ProductPage from "./ProductPage";
import CartItem from "./CartItem";

const CartManager = () => {
  const initialState: ShoppingCart = { items: [] };
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div style={{ border: "1px solid" }}>
      <h1>useReduce exercise</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((item) => (
          <ProductPage
            key={item.id}
            product={item}
            addProduct={() => dispatch({ type: "+", payload: { id: item.id } })}
          />
        ))}
      </div>
      <h3>Shopping Cart</h3>
      <div>
        {cart.items.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            addItem={() =>
              dispatch({ type: "+", payload: { id: item.product.id } })
            }
            removeOne={() =>
              dispatch({ type: "-", payload: { id: item.product.id } })
            }
            deleteItem={() =>
              dispatch({ type: "delete", payload: { id: item.product.id } })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CartManager;
