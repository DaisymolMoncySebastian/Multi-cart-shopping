import { useParams, Link, useNavigate } from "react-router-dom";
import StoreCard from "../components/StoreCard";

export default function StorePage() {
  const { storeName } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      {/* 🔙 Back Button */}
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      {/* 📍 Breadcrumb */}
      <p>
        <Link to="/">Home</Link> / {storeName}
      </p>

      <h1>{storeName} Store</h1>

      <StoreCard store={storeName} />
    </div>
  );
}