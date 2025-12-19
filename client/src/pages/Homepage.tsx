import { useState } from "react";
import { searchBooks } from "../api";
import type { OpenLibraryDoc } from "../types";
import "./Homepage.css";

export default function Homepage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<OpenLibraryDoc[]>([]);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!query.trim()) return;

    try {
      const books = await searchBooks(query);
      setResults(books.slice(0, 10));
      setError("");
    } catch {
      setError("Error fetching books.");
    }
  }

  return (
    <div className="homepage">
      <div className="home-card">
        <h1>📚 Book Finder</h1>

        <div className="search-container">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {error && <p>{error}</p>}

        <div id="results">
          {results.map((book) => (
            <div className="book-card" key={book.key}>
              <h3>{book.title}</h3>
              <p>{book.author_name?.[0] ?? "Unknown author"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
