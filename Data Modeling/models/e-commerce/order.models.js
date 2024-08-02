import mangoose from 'mangoose'

const orderItemSchema = new mangoose.Schema({
    productID:{
        type: mangoose.Schema.types.ObjecgtId,
        ref:"product"
    },
    quantity:{
        type:Number,
        requierd:true,
    }
})

const orderSchema = new mangoose.Schema({
    orderPrice:{
        type :Number,
        requierd : true,

    },
    customer:{
        type: mangoose.Schema.Types.ObjecgtId,
        ref : "user"
    }, 
    orderItems:{
        type : [orderItemSchema]
    },
    status:{
        type:String,
        enum: ["PENDING", "CANCELLED", "DELEVERED"],
        default: "PENDING",
        tracking_ID : Number
    }

},{timestamps : true})

export const order = mangoose.model("order", orderSchema)