const express = require("express");
const { recommendations } = require("../utils/recommendations.utils");
const {fullRecipe} = require("../utils/completeReciepe.util");
const {generateImage} = require("../utils/generateImage.utils")
const RecipeRouter = express.Router();

RecipeRouter.post("/recommendation", async (req, res) => {
  try {
    let { items } = req.body;
    let result = await recommendations(items);

    res.status(200).json({ result });
  } catch (error) {}
});

RecipeRouter.post("/fullrecipe",async(req,res)=>{
    try {
        let {recipe} = req.body;
        let result = await fullRecipe(recipe)
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({Error:"Error while generating recipe"})
    }
})


RecipeRouter.post("/image",async(req,res)=>{
    try {
        let {recipe} = req.body
        let image = await generateImage(recipe)
        
        res.status(200).json(image)
    } catch (error) {
        res.status(400).json({Error:"Error while generating image"})
    }
})
module.exports = {
  RecipeRouter,
};
