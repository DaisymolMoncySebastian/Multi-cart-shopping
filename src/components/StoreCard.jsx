import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function StoreCard({ store }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url = "";

    if (store === "Amazon") {
      url = "https://dummyjson.com/products/category/laptops";
    } else if (store === "Flipkart") {
      url = "https://dummyjson.com/products/category/smartphones";
    } else if (store === "Myntra") {
      url = "https://dummyjson.com/products/category/tops";
    } else if (store === "Nykaa") {
      url = "https://dummyjson.com/products/category/beauty";
    } else if (store === "Ajio") {
      url = "https://dummyjson.com/products/category/fragrances";
    }

    if (!url) return;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const items = data.products || [];

        const formatted = items.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price * 80,
          image: item.thumbnail
        }));

        setProducts(formatted);
      })
      .catch((err) => console.log(err));
  }, [store]);

  return (
    <div className="store">
      <h2>{store}</h2>
      <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search"
/>

      <div className="product-grid">
  {products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((p) => (
      <ProductCard key={p.id} product={p} store={store} />
    ))}
</div>
    </div>
  );
}

export default StoreCard;