import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadingTF } from "../redux/loadingSlice";
import { RootState } from "../redux/store";


interface IRecipie {
  recipieNeed: string;
}

const Recipie: React.FC<IRecipie> = ({ recipieNeed }) => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(
    (state: RootState) => state.loading.loading
  );
  // const loading = true;
  const [recipeData, setRecipeData] = useState<any>("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://prodigies.onrender.com/recipes/fullrecipe/${recipieNeed}`
        );
        setRecipeData(res.data);
        dispatch(loadingTF(false));
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, [recipieNeed]);
  console.log(loading);
  return (
    <div className="box-border  h-auto md:h-130 w-120 pb-3 ">
      {loading ? (
        <div className="flex justify-center shadowImg mt-7">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f206f6129d07620b232ae99/1597595492519-I3MYM5X0Z7Y9QDEFY467/baking+cake.gif"
            alt="Loading..."
          />
        </div>
      ) : (
        <>
          <div className="w-[98%] m-auto mb-2 text-center text-[1.8rem] sm:mb-7">
            Recipie Information: {recipeData.recipeName}
          </div>
          <div
            id="IMIG"
            className="flex lg:flex-row-reverse h-auto lg:w-[98%] m-auto gap-2 mb-2 sm:flex-col lg:justify-between mb-7 lg:mt-4"
          >
            <div
              id="IM"
              className="box-border sm:w-[100%] sm:m-auto lg:w-[30rem]  sm:mb-8 "
            >
              <img
                src={recipeData.image}
                alt={recipeData.recipeName}
                className=" m-auto shadowImg"
              />
            </div>
            <div
              id="IG"
              className="shadows h-auto lg:w-[50%]  pb-3 sm:mb-3 sm:w-[100%]"
            >
              <div className="pl-[1rem] pt-2">
                <h2 className="text-[1.6rem]">Ingredients:</h2>
                <ul>
                  {recipeData.content.map((step: string, index: number) => {
                    if (step === "Ingredients:") {
                      return null;
                    }
                    if (step.startsWith("- ")) {
                      return <li key={index}>{step.substring(2)}</li>;
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset; */}
          <div
            id="INS"
            className="shadows h-auto lg:w-[98%] md:h-30 md:w-full md:order-last lg:m-auto pl-[1rem] pt-2 pb-3 mt-3 md:mt-0"
          >
            <div>
              <h2 className="text-[1.6rem]">Instructions:</h2>
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
