import mongoose, {Schema} from 'mongoose';


const blogSchema = new Schema({

title:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    index:1
},

description:{
    type:String,
    required:true,
    trim:true,
   
}

}, {
    timestamps:true
})


mongoose.models = {}

const Blog = mongoose.model("Blog", blogSchema)
export default Blog;