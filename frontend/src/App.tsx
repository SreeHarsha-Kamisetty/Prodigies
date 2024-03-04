import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
// import Recipie from "./components/Recipie";
import axios from "axios";
import Recipie from "./components/Recipie";
import { useDispatch, useSelector } from "react-redux";
import { loadingTF } from "./redux/loadingSlice";
import { RootState } from "./redux/store";
import { FormEvent } from "react";

// import { NavLink } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";
// import { string } from "prop-types";

function App() {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(
    (state: RootState) => state.loading.loading
  );
  const [search, setSearch] = useState<string>();
  // const [searchDemo, setSearchDemo] = useState<string>("");
  const [recommend, setRecommend] = useState([]);
  const [recipieNeed, setRecipieNeed] = useState<string>("");
  const [showRecipie, setShowRecipie] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  // const buttonLoading = true;

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventdefault();
    e.preventDefault();
    // make the fetch request on the base of the search text
    // setSearch(searchDemo);

    const res = await axios.get(
      `https://prodigies.onrender.com/recipes/recommendation/${search}`
    );
    setRecommend(res.data.result);
    setButtonLoading(false);
    // console.log(res.data.result);
    // console.log(search);
  };
  console.log(loading);

  const recipesSelect = (item: string) => {
    setRecipieNeed(item);
    setShowRecipie(true);

    dispatch(loadingTF(true));
  };

  console.log(loading);
  // console.log(recommend);
  // console.log(showRecipie);
  // console.log(recipieNeed);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white">
      <div className="flex md:flex-row sm:flex-col gap-4 content min-h-screen">
        <div className="w-[25%] sm:w-[100%]  border-2 border-white sm:border-none ">
          <div className="mt-4  text-center">
            <button
              onClick={() => setShowRecipie(false)}
              className="shadows py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Home
            </button>
          </div>
          <div className="flex  justify-center text-white w-[100%]">
            <form className="w-[95%] pt-4 " onSubmit={handleSearch}>
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
                  placeholder="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setButtonLoading(true)}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-2 w-[50%] m-[auto] mt-[2rem] sm:pb-3  ">
            {buttonLoading ? (
              <>
                <div role="status " className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-[3rem] h-[3rem] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            ) : (
              <>
                {recommend.map((item: string) => {
                  return (
                    <button
                      onClick={() => recipesSelect(item)}
                      key={item}
                      type="button"
                      className="shadows py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      {item}
                    </button>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <div className=" w-[75%] sm:w-[100%]  border-2 border-white sm:pb-6 pb-3 sm:border-none">
          <div className="w-[95%] m-[auto]  mt-7 flex justify-center items-center ">
            {" "}
            {showRecipie ? (
              <Recipie recipieNeed={recipieNeed} />
            ) : (
              <div className="w-[90%] m-[auto] lg:mt-10  ">
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
