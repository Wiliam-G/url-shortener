import mongoose from "mongoose";
import { config } from "../config/Constants";

export class MongoConnection{
    public async connect(): Promise<void>{
        try{
           await mongoose.connect(config.MONGO_CONNECTION);
                console.log("db connected");
        } catch(error){
            console.log(error)
            process.exit(1)
        }
    }
}