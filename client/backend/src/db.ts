import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bookfinder",
  password: "Aneff12556.",
  port: 5432,
});

export default pool;
