import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DataBase is Connected`)
    } catch (error) {
        res.send({
            message: "Error in DataBase Connection"
        })
    }
}