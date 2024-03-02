const {RecipeModel}=require('../models/recipe.model')
const check = async (req, res, next) => {
    const { recipe } = req.params;
    try {
        const foundRecipe = await RecipeModel.findOne({ recipeName:recipe });
        if (foundRecipe) {
            res.status(200).json(foundRecipe);
        } else {
            next();
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

module.exports = {
    check
};
