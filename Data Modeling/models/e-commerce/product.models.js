import mangoose from 'mangoose'
import { category } from './category.models'

const productSchema  = new mangoose.Schema({
    description: {
        required:true,
        type: String
    },
    name:{
        required:true,
        type: String
    },
    productImage: {
        // required:true,
        type: String
    },
    price: {
        type : Number,
        default : 0
    },
    stock: {
        type : Number,
        default : 0
    },
    category: {
        type: mangoose.Schema.types.ObjectId,
        ref : "category",
        required : true,
    },
    owner : {
        type : mangoose.Schema.types.ObjectId,
        ref : "user",
    }
    

    

}, {timestamps : true})

export const product = mangoose.model('product', productSchema)