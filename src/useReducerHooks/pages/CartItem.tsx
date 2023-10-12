interface itemPageProps {
  item: CartItem;
  addItem: () => void;
  removeOne: () => void;
  deleteItem: () => void;
}

const CartItem = ({ item, addItem, removeOne, deleteItem }: itemPageProps) => {
  return (
    <div style={{ border: "1px" }}>
      <div>amount: {item.amount}</div>
      <div>{item.product.name}</div>
      <div>price: {item.product.price}</div>
      <button onClick={() => addItem()}>+</button>
      <button onClick={() => removeOne()}>-</button>
      <button onClick={() => deleteItem()}>delete</button>
    </div>
  );
};

export default CartItem;
