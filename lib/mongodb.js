import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
let cached = global.mongooseConnections;

if (!cached) {
    cached = global.mongooseConnections = { conn: null, promise: null }; 
}

export async function connectToDatabase(){
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI,{bufferCommands: false}).then((mongoose) => {
            cached.conn = mongoose;
            return cached.conn;
        });
    }
    return cached.promise;
}