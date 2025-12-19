import type { OpenLibraryDoc } from "./types";

export async function searchBooks(
  query: string
): Promise<OpenLibraryDoc[]> {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books :/");
  }

  const data = await res.json();
  return data.docs as OpenLibraryDoc[];
}
