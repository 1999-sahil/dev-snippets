import mongoose from "mongoose";

async function dbConnect(): Promise<void> {
    try {
        await mongoose.connect(process.env.DATABASE_URL as string);
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;