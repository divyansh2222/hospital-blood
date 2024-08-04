
const mongoose= require("mongoose")
const dotenv=require("dotenv")
dotenv.config();

const DB =process.env.DB;


const dbConnection= async()=>{
    try{
        await mongoose.connect(DB).then(()=>{
            console.log("database is")
    })
      }

     catch(error){

        console.log(error)
        setTimeout(dbConnection, 5000)
      }

    }
    
module.exports =dbConnection;