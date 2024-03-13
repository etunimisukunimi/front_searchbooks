import { useState, useEffect } from "react";

export function BookBlock({ categorie, bookName, authorName, imageLink }) {
  return (
    <div className="bookblock">
      <div className="bookblockImg">
        <img src={imageLink}></img>
      </div>
      <div className="bookblockInfo">
        <p>{categorie}</p>
        <h4>{bookName}</h4>
        <span>{authorName}</span>
      </div>
    </div>
  );
}
