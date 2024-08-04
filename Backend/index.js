const app= require("./app")

const dotenv=require("dotenv");
const dbConnection = require("./utilis/Db");
dotenv.config();


//Port
const PORT= process.env.PORT;

//Server
app.listen(PORT, ()=>{
    console.log(`seerver started at ${PORT}`)
    dbConnection();
})

//db
