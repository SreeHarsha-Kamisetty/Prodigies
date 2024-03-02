const express = require("express")
const cors = require("cors");
const { RecipeRouter } = require("./routes/Recipie.routes");


const app = express();

app.use(express.json())
app.use(cors())
app.use("/recipes",RecipeRouter)


app.get("/",(req,res)=>{
    res.send("HOME")
})

app.listen(8080,()=>{
    console.log(`Server is running at http://localhost:8080`)
})