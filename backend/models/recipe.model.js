const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    recipeName:String,
    content:Array,
    image:String
})


const RecipeModel = mongoose.model("recipe",recipeSchema)


module.exports={
    RecipeModel
}