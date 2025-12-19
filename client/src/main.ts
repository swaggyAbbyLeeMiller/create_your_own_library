import "./style.css";
import { searchBooks } from "./api";
import type { OpenLibraryDoc } from "./types";

const searchInput = document.querySelector<HTMLInputElement>("#searchInput")!;
const searchBtn = document.querySelector<HTMLButtonElement>("#searchBtn")!;
const resultsDiv = document.querySelector<HTMLDivElement>("#results")!;

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const books = await searchBooks(query);
    renderResults(books.slice(0, 10));
  } catch (error) {
    resultsDiv.textContent = "Error fetching books.";
  }
});


function renderResults(books: OpenLibraryDoc[]): void {
  resultsDiv.innerHTML = "";

  books.forEach((book) => {
    const div = document.createElement("div");
    div.className = "book-card";

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author_name?.[0] ?? "Unknown author";

    div.appendChild(title);
    div.appendChild(author);

    resultsDiv.appendChild(div);
  });
}
