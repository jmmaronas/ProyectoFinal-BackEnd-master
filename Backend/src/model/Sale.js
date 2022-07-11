import mongoose from 'mongoose'

// const compraSchema=new Schema(
//     {
//         productId:{type:String, require:true, trim:true, max:200},
//         qty:{type:Number, require:true, trim:true, max:100}
//     }
// )

const saildSchema= new mongoose.Schema({
    compra:[
        {
            productId:{type:String, require:true},
            qty:{type:Number}
        }
    ]
})

export default mongoose.model('Sale', saildSchema)