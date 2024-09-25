import mongoose from "mongoose"

const DBconnection = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;
    try{
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
        console.log("Database connection successfull")
    }
    catch (error){
        console.log("Error while connecting with the database", error.message)
    }
}

export default DBconnection