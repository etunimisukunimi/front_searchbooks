import { Navigation } from "./component/navigation/navigation.js";
import "./component/navigation/navigation.css";
import { Amount } from "./component/amount/amount_block.js";
import "./component/amount/amount_block.css";
import { BookBlock } from "./component/book_block/book_block.js";
import "./component/book_block/book_block.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Amount />
      <BookBlock />
    </div>
  );
}

export default App;
