import { useState, useEffect } from "react";

export function Navigation({ settotalAmount, setbooksInfo }) {
  const apiKey = "AIzaSyBmF8nKocVef4--531HHOUyFMM23U84dgE";

  const [value, setValue] = useState("");
  const [categorie, setCategorie] = useState("all");
  const [sortby, setSortby] = useState("relevance");

  function handleSubmit(event) {
    event.preventDefault();
    const bookSearchResult = fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}+subject${categorie}&orderBy=${sortby}&key=` +
        apiKey
    );

    bookSearchResult
      .then((response) => response.json())
      .then((data) => {
        settotalAmount(data);
        setbooksInfo(data);
      });
  }

  return (
    <div className="nav_block">
      <h1>Search for books</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <div className="nav_input_param">
        <h3>Categories</h3>
        <select onChange={(e) => setCategorie(e.target.value)}>
          <option value="all">All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
          {/* all, art, biography, computers, history, medical, poetry */}
        </select>
        <h3>Sorting by</h3>
        <select onChange={(e) => setSortby(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
}
