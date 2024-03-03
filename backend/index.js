const express = require("express")
const cors = require("cors");
const { RecipeRouter } = require("./routes/Recipie.routes");
const { connection } = require("./db");
const morgan = require("morgan")

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use("/recipes",RecipeRouter)


app.get("/",(req,res)=>{
    res.send("HOME")
})

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB")
        console.log(`Server is running at http://localhost:8080`)
    } catch (error) {
        console.log(error)
    }
    
})