import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart";

export default function CartPage() {
  // ✅ correct
  const { cart, saved, dispatch } = useContext(CartContext);

  // ✅ FIXED TOTAL
  const getTotal = () => {
    let total = 0;

    Object.keys(cart).forEach((store) => {
      cart[store].forEach((item) => {
        total += item.price * (item.qty || 1);
      });
    });

    return total;
  };

  return (
    <div>
      <h1>All Carts</h1>

      {/* 🛒 CART ITEMS */}
      {Object.keys(cart).map((store) => (
        <Cart key={store} store={store} items={cart[store]} />
      ))}

      {/* 💰 TOTAL */}
      <h2>Total: ₹{getTotal()}</h2>

      {/* 💾 SAVED ITEMS */}
      <h2>Saved for Later</h2>

      {Object.keys(saved).length === 0 ? (
        <p>No saved items</p>
      ) : (
        Object.keys(saved).map((store) =>
          saved[store].map((item) => (
            <div key={item.id} className="product">
              <p>{item.name} - ₹{item.price}</p>

              <button
                onClick={() =>
                  dispatch({
                    type: "MOVE_TO_CART",
                    payload: { store, item }
                  })
                }
              >
                Move to Cart
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_SAVED",
                    payload: { store, id: item.id }
                  })
                }
              >
                Remove
              </button>
            </div>
          ))
        )
      )}
    </div>
  );
}