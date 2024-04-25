import { useState, useEffect } from "react";

export function Navigation({ settotalAmount, setbooksInfo, setfetchValue }) {
  const apiKey = "AIzaSyBmF8nKocVef4--531HHOUyFMM23U84dgE";

  const [value, setValue] = useState("");
  const [categorie, setCategorie] = useState("");
  const [sortby, setSortby] = useState("relevance");
  function handleSubmit(event) {
    event.preventDefault();
    const bookSearchResult = fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}${categorie}&orderBy=${sortby}&maxResults=28&startIndex=0&key=` +
        apiKey
    );
    bookSearchResult
      .then((response) => response.json())
      .then((data) => {
        settotalAmount(data);
        setbooksInfo(data);
        setfetchValue({ value, categorie, sortby, apiKey });
        console.log(data);
      });
  }

  return (
    <div className="nav_block">
      <h1>Search for books</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>send</button>
      </form>
      <div className="nav_input_param">
        <h3>Categories</h3>
        <select onChange={(e) => setCategorie(e.target.value)}>
          <option value="">All</option>
          <option value="+subject:art">Art</option>
          <option value="+subject:biography">Biography</option>
          <option value="+subject:computers">Computers</option>
          <option value="+subject:history">History</option>
          <option value="+subject:medical">Medical</option>
          <option value="+subject:poetry">Poetry</option>
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
