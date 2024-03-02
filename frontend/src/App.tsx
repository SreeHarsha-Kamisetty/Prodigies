import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [search, setSearch] = useState<string>();
  const heandleSearch = async () => {
    // make the fetch request on the base of the search text

    // const res=await fetch(`http://localhost:8080/recipes`)
    console.log(search);
  };
  return (
    <>
      <div className="flex gap-4">
        <div className="w-[25%] min-h-screen border-2 border-black">
          <div className="flex  justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="border-2 border-black" onClick={heandleSearch}>
              Search
            </button>
          </div>
        </div>
        <div className="w-[75%] min-h-screen border-2 border-black">
          {" "}
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default App;
