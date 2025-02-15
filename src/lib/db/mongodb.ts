
import mongoose from 'mongoose';

const dbConnect = async (MONGODB_URI = process.env.MONGODB_URI) => {
    
    try {
        //check the env variable
        if (!MONGODB_URI) {
            throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
        }
        // Check if already connected
        if (mongoose.connection.readyState >= 1) {
            console.log("Already connected to MongoDB");
            return;
        }

        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI, {
            dbName: 'craftlink', // Specify your database name here
            bufferCommands: true,
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error('Failed to connect to MongoDB');
    }
};

export default dbConnect;



