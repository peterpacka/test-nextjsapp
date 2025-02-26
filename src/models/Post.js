import mongoose, { mongo } from "mongoose";


const postSchema = new mongoose.Schema({
    edit_key: {type: String, required: true},
    author: {type: String, required: true},
    head_title: {type: String, required: true},
    short_title: {type: String, required: true}, 
    content: {type: String, required: true},
    ext_sources: {type: [String], default: []},
    verified_post: {type: Boolean, default: false},
    views: {type: Number, default: 0},
    likes: {type: Number, default: 0},
    shares: {type: Number, default: 0},
    date: {type: Date, default: Date.now}, 
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post