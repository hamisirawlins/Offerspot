import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    creator:String,
    tags: [String],
    selectFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;