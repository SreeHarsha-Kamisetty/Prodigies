const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

<<<<<<< HEAD
const recommendations = async (items) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content: `3 recipies with ${items}, just the recipie names all in one line seperated by commas`,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  let recipies = await chatCompletion.choices[0].message.content;
=======
const recommendations = async(items)=> {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'assistant', content: `3 recipies with ${items}, just the recipie names all in one line seperated by commas . Always follow this format - item1,item2,item3 and avoid sending items with their number like 1.item1,2.item2` }],
      model: 'gpt-3.5-turbo',
    });
    let recipies = await chatCompletion.choices[0].message.content
 
    recipies = recipies.split(",")
    // console.log(recipies)
    return recipies;   
  }
>>>>>>> c38ebead584e9b0d4613f9844a4bfb3ca477a258

  recipies = recipies.split(",");
  // console.log(recipies)
  return recipies;
};

module.exports = {
  recommendations,
};
