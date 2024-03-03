import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
// import Recipie from "./components/Recipie";
import axios from "axios";
import Recipie from "./components/Recipie";
// import { NavLink } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";
// import { string } from "prop-types";

function App() {
  const [search, setSearch] = useState<string>();
  // const [searchDemo, setSearchDemo] = useState<string>("");
  const [recommend, setRecommend] = useState([]);
  const [recipieNeed, setRecipieNeed] = useState<string>("");
  const [showRecipie, setShowRecipie] = useState<boolean>(false);

  const handleSearch = async () => {
    // make the fetch request on the base of the search text
    // setSearch(searchDemo);
    const res = await axios.get(
      `http://localhost:8080/recipes/recommendation/${search}`
    );
    setRecommend(res.data.result);
    // console.log(res.data.result);
    // console.log(search);
  };
  // console.log(recipieNeed);

  const recipesSelect = (item: string) => {
    setRecipieNeed(item);
    setShowRecipie(true);
  };

  // console.log(search);
  // console.log(recommend);
  // console.log(showRecipie);
  // console.log(recipieNeed);

  return (
    <>
      <div className="flex gap-4">
        <div className="w-[25%] min-h-screen border-2 border-black">
         <button onClick={() => setShowRecipie(false)}>home</button>
          <div className="flex  justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-black"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="border-2 border-black" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="flex flex-col gap-2 w-[50%] m-[auto] mt-[2rem]  ">
            {recommend.map((item: string) => {
              return (
                <button
                  onClick={() => recipesSelect(item)}
                  key={item}
                  className="border-2 border-black"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-[75%] min-h-screen border-2 border-black flex items-center">
          {" "}
          {showRecipie ? (
            <Recipie recipieNeed={recipieNeed} /> 
            
          ) : (
            <div className="w-[90%] m-[auto]">
              <Carousel />
            </div>
          )}
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold underline bg-red-300">Hello world!</h1>;
     <Recipie /> */}
    </>
  );
}

export default App;
