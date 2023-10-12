type Product = {
  id: number;
  name: string;
  price: string;
};

type CartItem = {
  product: Product;
  amount: number;
};

type ShoppingCart = {
  items: CartItem[];
};
