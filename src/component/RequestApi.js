import { useState, useEffect } from "react";
import { Amount } from "./amount/amount_block";
export function RequestApi({ requestValue }) {
  const apiKey = "AIzaSyBmF8nKocVef4--531HHOUyFMM23U84dgE";
  console.log(requestValue);
  useEffect(() => {
    const bookSearchResult = fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" +
        apiKey
    );

    bookSearchResult.then((response) => response.json());
  }, []);
}
