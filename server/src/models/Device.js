import { model, Schema, Types } from "mongoose";



const deviceSchema = new Schema({
    brand:{
        type:String,
        required:true,
        minLength:2
    },
    model:{
        type:String,
        required:true
        ,minLength:2
    },
    hardDisk:{
        type:Number,
        required:true,
        min:128
    },
    screenSize:{
        type:Number,
        required:true,
        min:10
    },
    ram:{
        type:Number,
        required:true,
        min:4
    },
    os:{
        type:String,
        required:true,
        minLength:2
    },
    cpu:{
        type:String,
        required:true,
        minLength:2
    },
    gpu:{
        type:String,
        required:true,
        minLength:2
    },
    price:{
        type:Number,
        required:true,
        min:100
    },
    colour:{
        type:String,
        required:true,
        minLength:2
    },
    weight:{
        type:Number,
        required:true
        ,min:300
    },
    imageUrl:{
        type:String,
        required:true,
        match:/^https?:\/\//
    },
    owner:{
        type: Types.ObjectId,
        ref: `User`
    },
    preferedList:[{
        type: Types.ObjectId,
        ref: `User`
    }]
});

const Device = model(`Device`,deviceSchema);

export default Device;