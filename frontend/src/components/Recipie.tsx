// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface IRecipie {
//   recipieNeed: string;
// }

// const Recipie: React.FC<IRecipie> = ({ recipieNeed }) => {
//   const [recipeData, setRecipeData] = useState<any>("");

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8080/recipes/fullrecipe/${recipieNeed}`);
//         setRecipeData(res.data);
//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchRecipe();
//   }, [recipieNeed]);

//   return (
//     <div className="box-border border-2 border-zinc-950 h-auto md:h-130 w-120">
//       {recipeData && (
//         <>
//           <div>Recipie Information:{recipeData.recipeName}</div>
//           <div id="IMIG" className="flex flex-col md:flex-row h-50 md:h-90 w-full md:w-full">
//             <div id="IM" className="box-border h-50 md:w-1/2 border-2 border-zinc-950">
//               <img src={recipeData.image} alt={recipeData.recipeName} className="w-full h-full object-cover" />
//             </div>
//             <div id="IG" className="border-2 border-zinc-950 h-50 md:w-1/2 md:order-first text-center">
//               <div className="text-center">
//                 <h2>Ingredients:</h2>
//                 <ul>
//                   {recipeData.content.map((step: string, index: number) => {
//                     if (step === "Ingredients:") {
//                       return null; // Skip the "Ingredients:" line
//                     }
//                     if (step.startsWith("- ")) {
//                       return <li key={index}>{step.substring(2)}</li>; // Remove the leading "-" character
//                     }
//                     return null;
//                   })}
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div id="INS" className="border-2 border-zinc-950 h-auto w-full md:h-30 md:w-full md:order-last">
//             <div>
//               <h2>Instructions:</h2>
//               <ol>
//                 {recipeData.content.map((step: string, index: number) => {
//                   if (step === "Instructions:") {
//                     return null; 
//                   }
//                   if (!step.startsWith("- ") && !step.startsWith("Ing")) {
//                     return <li key={index}>{step}</li>;
//                   }
//                   return null;
//                 })}
//               </ol>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Recipie;



import React, { useEffect, useState } from "react";
import axios from "axios";

interface IRecipie {
  recipieNeed: string;
}

const Recipie: React.FC<IRecipie> = ({ recipieNeed }) => {
  const [recipeData, setRecipeData] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/recipes/fullrecipe/${recipieNeed}`);
        setRecipeData(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, [recipieNeed]);

  return (
    <div className="box-border border-2 border-zinc-950 h-auto md:h-130 w-120">
      {loading ? (
        <img src="https://images.squarespace-cdn.com/content/v1/5f206f6129d07620b232ae99/1597595492519-I3MYM5X0Z7Y9QDEFY467/baking+cake.gif" alt="Loading..." />
      ) : (
        <>
          <div className="text-center">Recipie Information: {recipeData.recipeName}</div>
          <div id="IMIG" className="flex flex-col md:flex-row h-50 md:h-90 w-full md:w-full">
            <div id="IM" className="box-border h-50 md:w-1/2 border-2 border-zinc-950">
              <img src={recipeData.image} alt={recipeData.recipeName} className="w-full h-full object-cover" />
            </div>
            <div id="IG" className="border-2 border-zinc-950 h-50 md:w-1/2 md:order-first text-center">
              <div className="text-center">
                <h2>Ingredients:</h2>
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
          <div id="INS" className="border-2 border-zinc-950 h-auto w-full md:h-30 md:w-full md:order-last">
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
