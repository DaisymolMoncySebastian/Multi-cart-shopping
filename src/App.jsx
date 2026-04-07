import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import StorePage from "./pages/StorePage";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Navbar */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/cart">Cart</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store/:storeName" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;