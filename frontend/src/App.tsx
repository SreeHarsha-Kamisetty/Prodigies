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

  const handleSearch = async (e: any) => {
    // e.preventdefault();
    e.preventDefault();
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
  console.log(recommend);
  // console.log(showRecipie);
  // console.log(recipieNeed);

  //     sm: "30em",
  //     md: "48em",
  //     lg: "62em",
  //     xl: "80em",
  //     "2xl": "96em",

  return (
    <div className="bg-black text-white">
      <div className="flex md:flex-row sm:flex-col gap-4 content min-h-screen">
        <div className="w-[25%] sm:w-[100%]  border-2 border-white">
          <div className="flex  justify-center text-white w-[100%]">
            <form className="w-[95%] pt-8 " onSubmit={handleSearch}>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-2 w-[50%] m-[auto] mt-[2rem] sm:pb-3  ">
            {recommend.map((item: string) => {
              return (
                <button
                  onClick={() => recipesSelect(item)}
                  key={item}
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className=" w-[75%] sm:w-[100%]  border-2 border-white flex items-center  justify-center flex-col sm:pb-6">
          <div>
            <button
              onClick={() => setShowRecipie(false)}
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4"
            >
              Home
            </button>
          </div>
          <div className="w-[95%] m-[auto]  mt-5">
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
      </div>
    </div>
  );
}

export default App;
