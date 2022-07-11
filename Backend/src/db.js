import mongoose from 'mongoose'
import {MONGODB_URI} from '../config.js'


const connectDB=async ()=>{
    try{
        const db= await mongoose.connect(MONGODB_URI)
        console.log(`DB id connected${db.connection.name}`)
    }catch(err){ console.error(err)}
}

export default connectDB