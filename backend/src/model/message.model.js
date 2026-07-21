import mongoose from "mongoose";

const messageScehma = new mongoose.Schema(
    {
        senderId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },


        receiverId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        text:{
            type: String,
        },

        image: {
            type:String,
        },
    },
    {timestamp: true}
)

const Message = mongoose.model("Message",messageScehma)

export default Message;