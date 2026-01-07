import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import pool from "./db";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters" });
  }

  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at`,
      [email, hashedPassword]
    );

    res.status(201).json({ message: "User created", user: result.rows[0] });
  } catch (error: any) {
    if (error.code === "23505") {
      return res.status(409).json({ error: "Email already exists" });
    }

    console.error("Signup error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
