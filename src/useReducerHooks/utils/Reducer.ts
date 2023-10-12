import { items } from "./items";

type CartAction = {
  type: string;
  payload: CartActionPayload;
};

type CartActionPayload = {
  id: number;
};
export const cartReducer = (state: ShoppingCart, action: CartAction) => {
  switch (action.type) {
    case "+": {
      if (!state.items.find((item) => item.product.id === action.payload.id)) {
        const newProductToCart = items.find(
          (item) => item.id === action.payload.id
        )!;
        const newCartItem = { amount: 1, product: newProductToCart };
        state.items.push(newCartItem);
      } else {
        const updatedItem = state.items.find(
          (item) => item.product.id === action.payload.id
        );
        updatedItem!.amount++;
      }
      break;
    }
    case "-": {
      const updatedItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      updatedItem!.amount--;
      if (updatedItem?.amount === 0) {
        const index = state.items.findIndex(
          (item) => item.product.id === action.payload.id
        );
        state.items.splice(index, 1);
      }
      break;
    }
    case "delete": {
      const index = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state.items.splice(index, 1);
      break;
    }
    default:
      break;
  }
  return { ...state };
};
