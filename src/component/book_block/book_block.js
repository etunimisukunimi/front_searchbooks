import { useState, useEffect } from "react";

export function BookBlock({ categorie, bookName, authorName, imageLink }) {
  return (
    <div className="bookblock">
        <img src={imageLink}></img>
        {categorie} <br/>
        {bookName} <br/>
        {authorName} <br/>
      </div>
  );
}
