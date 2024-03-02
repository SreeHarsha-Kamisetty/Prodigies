const OpenAI = require("openai")
require("dotenv").config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

const fullRecipe = async(recipe)=>{
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'assistant', content: `Generate recipie for ${recipe}. Keep the process step by step along with all the required details` }],
            model: 'gpt-3.5-turbo',
          });
          let recipieContent = await chatCompletion.choices[0].message.content
          console.log(recipieContent)
            return recipieContent
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports={
    fullRecipe
}