import mongoose from "mongoose"

const DBconnection = async () => {
    const MONGODB_URI = `mongodb+srv://saseendranrohit3002:mango_roni175@file-transfer.ocqzy.mongodb.net/?retryWrites=true&w=majority&appName=file-transfer`
    try{
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
        console.log("Database connection successfull")
    }
    catch (error){
        console.log("Error while connecting with the database", error.message)
    }
}

export default DBconnection