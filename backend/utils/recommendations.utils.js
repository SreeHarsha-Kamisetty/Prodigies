const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

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

  recipies = recipies.split(",");
  // console.log(recipies)
  return recipies;
};

module.exports = {
  recommendations,
};
