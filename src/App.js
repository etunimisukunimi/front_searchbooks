import { useState } from "react";
import { Navigation } from "./component/navigation/navigation.js";
import "./component/navigation/navigation.css";
import { BookBlock } from "./component/book_block/book_block.js";
import "./component/book_block/book_block.css";
import { Amount } from "./component/amount/amount_block.js";
import "./component/amount/amount_block.css";

function App() {
  const [totalAmount, settotalAmount] = useState("~");
  const [booksInfo, setbooksInfo] = useState({ items: [] });
  console.log(booksInfo);
  return (
    <div className="App">
      <Navigation settotalAmount={settotalAmount} setbooksInfo={setbooksInfo} />
      <Amount totalAmount={totalAmount} />
      <div className='bookblockPage'>
      {booksInfo.items.map(({ volumeInfo }) => (
        <BookBlock
          key={volumeInfo?.title}
          bookName={volumeInfo?.title}
          categorie={volumeInfo?.categories}
          authorName={volumeInfo?.authors}
          imageLink={volumeInfo.imageLinks?.thumbnail}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
