import { useState, useId } from "react";
import { Navigation } from "./component/form/form.js";
import "./component/form/form.css";
import { BookBlock } from "./component/book_block/book_block.js";
import "./component/book_block/book_block.css";
import { Amount } from "./component/amount/amount_block.js";
import "./component/amount/amount_block.css";
import "./App.css";
import { MoreButton } from "./component/loadmoreButton/moreButton.js";

function App() {
  const [totalAmount, settotalAmount] = useState("~");
  const [booksInfo, setbooksInfo] = useState({ items: [] });
  const [fetchValue, setfetchValue] = useState({});
  
  return (
    <div className="App">
      <Navigation
        settotalAmount={settotalAmount}
        setbooksInfo={setbooksInfo}
        setfetchValue={setfetchValue}
      />
      {!!totalAmount.items?.length && <Amount totalAmount={totalAmount} />}
      <div className="booksMoreBlock">
        {booksInfo.items?.map(({ volumeInfo, id }) => (
          <BookBlock
            key={id}
            bookName={volumeInfo?.title}
            categorie={volumeInfo?.categories}
            authorName={volumeInfo?.authors}
            imageLink={volumeInfo.imageLinks?.thumbnail}
          />
        ))}
      </div>
      <div className="button">
        {!!booksInfo.items?.length && (
          <MoreButton setbooksInfo={setbooksInfo} fetchValue={fetchValue} />
        )}
      </div>
    </div>
  );
}

export default App;
