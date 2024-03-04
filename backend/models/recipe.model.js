const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    recipeName:String,
    content:Array,
    image:String,
    createdAt: { type: Date, default: Date.now },
    expireAt: { type: Date, default: undefined },
},{
    versionKey:false
})

recipeSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });
const RecipeModel = mongoose.model("recipe",recipeSchema)


module.exports={
    RecipeModel
}