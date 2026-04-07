import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

// 🧠 Initial State
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || {},
  saved: JSON.parse(localStorage.getItem("saved")) || {}
};

// ⚙️ Reducer
function cartReducer(state, action) {
  switch (action.type) {

    // 🛒 ADD TO CART
    case "ADD_TO_CART": {
      const { store, product } = action.payload;
      const existing = state.cart[store]?.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existing) {
        updatedCart = state.cart[store].map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...(state.cart[store] || []),
          { ...product, qty: 1 }
        ];
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          [store]: updatedCart
        }
      };
    }

    case "ADD_TO_CART": {
  const { store, product } = action.payload;
  const existing = state.cart[store]?.find(
    (item) => item.id === product.id
  );

  let updatedCart;

  if (existing) {
    updatedCart = state.cart[store].map((item) =>
      item.id === product.id
        ? { ...item, qty: (item.qty || 1) + 1 }
        : item
    );
  } else {
    updatedCart = [...(state.cart[store] || []), { ...product, qty: 1 }];
  }

  return {
    ...state,
    cart: {
      ...state.cart,
      [store]: updatedCart
    }
  };
}

    // ❌ REMOVE FROM CART
    case "REMOVE_FROM_CART": {
      const { store, id } = action.payload;

      return {
        ...state,
        cart: {
          ...state.cart,
          [store]: (state.cart[store] || []).filter(
            (item) => item.id !== id
          )
        }
      };
    }

    // ➕ INCREASE QTY
    case "INCREASE_QTY": {
      const { store, id } = action.payload;

      return {
        ...state,
        cart: {
          ...state.cart,
          [store]: state.cart[store].map((item) =>
            item.id === id
              ? { ...item, qty: (item.qty || 1) + 1 }
              : item
          )
        }
      };
    }

    // ➖ DECREASE QTY
    case "DECREASE_QTY": {
      const { store, id } = action.payload;

      return {
        ...state,
        cart: {
          ...state.cart,
          [store]: state.cart[store].map((item) =>
            item.id === id
              ? { ...item, qty: Math.max((item.qty || 1) - 1, 1) }
              : item
          )
        }
      };
    }

    // 💾 SAVE FOR LATER
    case "SAVE_FOR_LATER": {
      const { store, item } = action.payload;

      return {
        ...state,
        cart: {
          ...state.cart,
          [store]: (state.cart[store] || []).filter(
            (i) => i.id !== item.id
          )
        },
        saved: {
          ...state.saved,
          [store]: [...(state.saved[store] || []), item]
        }
      };
    }

    // 🔄 MOVE BACK TO CART
    case "MOVE_TO_CART": {
      const { store, item } = action.payload;

      return {
        ...state,
        saved: {
          ...state.saved,
          [store]: (state.saved[store] || []).filter(
            (i) => i.id !== item.id
          )
        },
        cart: {
          ...state.cart,
          [store]: [...(state.cart[store] || []), item]
        }
      };
    }

    default:
      return state;
  }
}

// 🌐 Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 💾 Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("saved", JSON.stringify(state.saved));
  }, [state]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}