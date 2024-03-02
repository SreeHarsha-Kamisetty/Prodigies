const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    recipeName:String,
    content:Array,
    image:String
},{
    versionKey:false
})


const RecipeModel = mongoose.model("recipe",recipeSchema)


module.exports={
    RecipeModel
}