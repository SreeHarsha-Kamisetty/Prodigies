import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadingTF } from "../redux/loadingSlice";

interface IRecipie {
  recipieNeed: string;
}

const Recipie: React.FC<IRecipie> = ({ recipieNeed }) => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(
    (state: boolean) => state.loading.loading
  );
  const [recipeData, setRecipeData] = useState<string>("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/recipes/fullrecipe/${recipieNeed}`
        );
        setRecipeData(res.data);
        dispatch(loadingTF(false));
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, [recipieNeed]);
  console.log(loading);
  return (
    <div className="box-border border-2 border-white h-auto md:h-130 w-120">
      {recipeData && (
        <>
          <div className="w-[98%] m-auto mb-2 sm:text-center">
            Recipie Information:{recipeData.recipeName}
          </div>
          <div
            id="IMIG"
            className="flex lg:flex-row-reverse h-auto lg:w-[98%] m-auto gap-2 mb-2 sm:flex-col"
          >
            <div
              id="IM"
              className="box-border sm:w-[50%] sm:m-auto lg:w-[30%] border-2 border-white"
            >
              <img
                src={recipeData.image}
                alt={recipeData.recipeName}
                className=" m-auto "
              />
            </div>
            <div id="IG" className="border-2 border-white h-auto lg:w-[70%] ">
              <div>
                <h2>Ingredients:</h2>
                <ul>
                  {recipeData.content.map((step: string, index: number) => {
                    if (step === "Ingredients:") {
                      return null; // Skip the "Ingredients:" line
                    }
                    if (step.startsWith("- ")) {
                      return <li key={index}>{step.substring(2)}</li>; // Remove the leading "-" character
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div
            id="INS"
            className="border-2 border-white h-auto lg:w-[98%] md:h-30 md:w-full md:order-last lg:m-auto"
          >
            <div>
              <h2>Instructions:</h2>
              <ol>
                {recipeData.content.map((step: string, index: number) => {
                  if (step === "Instructions:") {
                    return null;
                  }
                  if (!step.startsWith("- ") && !step.startsWith("Ing")) {
                    return <li key={index}>{step}</li>;
                  }
                  return null;
                })}
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Recipie;
