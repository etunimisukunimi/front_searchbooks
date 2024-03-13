import { useState, useEffect } from "react";

export function MoreButton({ setbooksInfo, fetchValue }) {
  const [startIndex, setstartIndex] = useState(30);
  function handleClick() {
    setstartIndex(startIndex + 30);
    const bookSearchResult = fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${fetchValue.value}${fetchValue.categorie}&orderBy=${fetchValue.sortby}&maxResults=30&startIndex=${startIndex}&key=` +
        fetchValue.apiKey
    );
    bookSearchResult
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.items)) {
          setbooksInfo(({ items }) => {
            return { items: [...items, ...data.items] };
          });
        }
      console.log(data)
      });
  }

  return <button onClick={handleClick}>load more</button>;
}
