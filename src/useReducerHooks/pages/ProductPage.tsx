interface ProductProps {
  product: Product;
  addProduct: () => void;
}
const ProductPage = ({ product, addProduct }: ProductProps) => {
  return (
    <div
      style={{
        border: "solid",
        width: "150px",
      }}
    >
      <h4>{product.name}</h4>
      <div>price: {product.price}</div>
      <button onClick={() => addProduct()}>add to cart</button>
    </div>
  );
};

export default ProductPage;
