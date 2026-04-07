import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product, store }) {
  const { dispatch } = useContext(CartContext);
  <p>⭐ 4.{product.id % 5}</p>

  return (
    <div className="product">
      <span className="badge">Hot</span>

      <img src={product.image} alt={product.name} />

      <h4>{product.name}</h4>
      <p className="price">₹{product.price}</p>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: { store, product }
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}