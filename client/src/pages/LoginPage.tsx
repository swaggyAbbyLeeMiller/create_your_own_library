import { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Temporary placeholder logic
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Logged in");
  }

  return (
    <div className="login-page">
      {/* Floating books background */}
      <div className="floating-books">
        <span className="book b1">📘</span>
        <span className="book b2">📕</span>
        <span className="book b3">📗</span>
        <span className="book b4">📙</span>
        <span className="book b5">📓</span>
      </div>

      <div className="login-card">
        <h1>📚 Welcome Back</h1>
        <p className="subtitle">Log in to your library</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log In</button>
        </form>

        <p className="footer-text">
          No account yet?{" "}
          <span className="signup-link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
