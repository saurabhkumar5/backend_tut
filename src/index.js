import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
     console.log("database connection faild", err)
})












// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log('error',error)
//         throw error
//     }
// })()