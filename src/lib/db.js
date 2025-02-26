import mongoose from "mongoose";

const connectToDatabase = async () => {
    if (!process.env.MONGO_URL) {
        console.log("The MONGO_URL is missing in .env");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectToDatabase;
