import { Link } from "react-router-dom";

export default function Home() {
  const stores = [
    { name: "Amazon", icon: "🟠" },
    { name: "Flipkart", icon: "🔵" },
    { name: "Myntra", icon: "👗" },
    { name: "Nykaa", icon: "💄" },
    { name: "Ajio", icon: "👜" }
  ];

  
  return (
    <div>
      <h1>🛒 Multi Cart Shopping</h1>

      <div className="grid">
        {stores.map((s) => (
          <div key={s.name} className="card">
            <h2>{s.icon}</h2>
            <h3>{s.name}</h3>

            <Link to={`/store/${s.name}`}>
              <button>Explore</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}