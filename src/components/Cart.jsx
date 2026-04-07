import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart({ store, items }) {
  const { dispatch } = useContext(CartContext);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>{store}</h2>

      {items.map((item, index) => (
        <div className="product" key={index}>
          <p>{item.name} - ₹{item.price}</p>

          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
  
 <button
  onClick={() =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { store, id: item.id }
    })
  }
>
  Remove
</button>

  <button
    onClick={() =>
      dispatch({
        type: "MOVE_TO_CART",
        payload: { store, item }
      })
    }
  >
    Move
  </button>

  <button
    onClick={() =>
      dispatch({
        type: "SAVE_FOR_LATER",
        payload: { store, item }
      })
    }
  >
    Save
  </button>

</div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}