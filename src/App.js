import { Navigation } from "./component/navigation/navigation.js";
import "./component/navigation/navigation.css";
import { Amount } from "./component/amount/amount_block.js";
import "./component/amount/amount_block.css";
import { BookBlock } from "./component/book_block/book_block.js";
import "./component/book_block/book_block.css";

function App() {
  const items = [{ categorie: "1", bookName: "1231", authorName: "1" }];

  return (
    <div className="App">
      <Navigation />
      <Amount />
      {items.map(({ categorie, bookName, authorName }) => (
        <BookBlock
          key={bookName}
          categorie={categorie}
          bookName={bookName}
          authorName={authorName}
        />
      ))}
    </div>
  );
}

export default App;
