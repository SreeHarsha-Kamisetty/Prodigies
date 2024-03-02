const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const generateImage = async(recipe) =>{
    // const resp = await fetch('https://api.deepai.org/api/text2img', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'api-key': process.env.DEEPAI_API_KEY
    //     },
    //     body: JSON.stringify({
    //         text: recipe,
    //         grid_size: "1",
    //         image_generator_version :"hd",
    //         negative_prompt:"multiple images"
            
    //     }),
       
    // });
    
    // const data = await resp.json();
    let data = "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1-1152x1536.jpg"
    // console.log(data);
    return data
}

module.exports={
    generateImage
}