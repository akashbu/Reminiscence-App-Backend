 import mongoose from 'mongoose'

 const postSchema = mongoose.Schema({
     title : String,
     message : String,
     creator : String,
     name : String,
     tags : [String],
     selectedFile : String,
     comments : {
         type : [String],
         default : []
     },
     likes: {
         type : [String],
         default : []
     },
     createdAt: {
         type: Date,
         default : new Date()
     },
 })

 const PostMessage = mongoose.model('PostMessage', postSchema)

 export default PostMessage