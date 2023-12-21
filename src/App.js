import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Book from "./components/Pages/Book";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="booking" element={ <Book/> } />
      </Routes>
    </div>
  );
}

export default App;
