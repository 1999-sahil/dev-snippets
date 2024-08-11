"use server";
import mongoose from "mongoose";

export async function connect(): Promise<void> {
    try {
        await mongoose.connect(process.env.DATABASE_URL as string);
        console.log("Mongoose DB Connect.");
    } catch (error) {
        console.log(error);
    }
}

export default connect;