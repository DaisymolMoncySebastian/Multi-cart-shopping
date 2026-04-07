import { Link } from "react-router-dom";

export default function Landing() {
  const styles = {
    landing: {
      height: "100vh",
      background: "linear-gradient(135deg, #00c6ff, #0072ff)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      background: "rgba(255, 255, 255, 0.15)",
      padding: "40px 60px",
      borderRadius: "20px",
      textAlign: "center",
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      animation: "fadeIn 1s ease-in-out",
    },
    title: {
      fontSize: "40px",
      color: "white",
      marginBottom: "10px",
    },
    text: {
      color: "#f1f1f1",
      fontSize: "18px",
      marginBottom: "25px",
    },
    button: {
      background: "linear-gradient(45deg, #ff6a00, #ee0979)",
      border: "none",
      padding: "12px 25px",
      fontSize: "16px",
      color: "white",
      borderRadius: "25px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.landing}>
      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div style={styles.overlay}>
        <h1 style={styles.title}>🛒 Multi Cart Shopping</h1>

        <p style={styles.text}>
          Shop smarter with multiple carts for different stores
        </p>

        <Link to="/home">
          <button
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          >
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}