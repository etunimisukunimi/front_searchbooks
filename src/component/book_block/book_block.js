import { useState, useEffect } from "react";

export function BookBlock({ categorie, bookName, authorName }) {
  return (
    <div className="bookblock">
      <img></img>
      <a href="#">{categorie}</a>
      <h3>{bookName}</h3>
      <h5>{authorName}</h5>
    </div>
  );
}
