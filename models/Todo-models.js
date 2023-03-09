import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    userid:{
        type:String,
    },
    // timestamp:{
    //     type: String,
    //     default: Date.now()
    // },
},
{
    timestamps: true
},)

export default mongoose.model("Todo", TodoSchema)