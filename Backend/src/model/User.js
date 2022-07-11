import { Schema, model } from 'mongoose'

const userSchema=new Schema(
    {
        name:{type:String, trim:true, require:true, max:10},
        pass:{type:String, trim:true, require:true, max:10},
        buys:{type:Array}
    }
)

export default model("User", userSchema)