const express = require("express");
const { recommendations } = require("../utils/recommendations.utils");
const {fullRecipe} = require("../utils/completeReciepe.util");
const {generateImage} = require("../utils/generateImage.utils")
const RecipeRouter = express.Router();
const {check}=require('../middleware/check.middleware')
const {RecipeModel}=require('../models/recipe.model')

RecipeRouter.get("/recommendation/:items", async (req, res) => {
  try {
    let { items } = req.params;
    let result = await recommendations(items);
    
    res.status(200).json({ result });
  } catch (error) {}
});

RecipeRouter.get("/fullrecipe/:recipe",check,async(req,res)=>{
    try {
        let {recipe} = req.params;
        let result = await fullRecipe(recipe)
        result = result.split("\n");
        let image = await generateImage(recipe);
        const expirationTime = new Date();
expirationTime.setHours(expirationTime.getHours() + 1);
        const obj={
          recipeName:recipe,
          content:result,
          image:image,
          createdAt: new Date(),
          expireAt: expirationTime,
        }
        const recipeObj=new RecipeModel(obj)
        await recipeObj.save()
        res.status(200).json(obj);
    } catch (error) {
        console.log(error)
        res.status(400).json({Error:"Error while generating recipe"})
    }
})


// RecipeRouter.post("/image",async(req,res)=>{
//     try {
//         let {recipe} = req.body
//         let image = await generateImage(recipe)
        
//         res.status(200).json(image)
//     } catch (error) {
//         res.status(400).json({Error:"Error while generating image"})
//     }
// })
module.exports = {
  RecipeRouter,
};
