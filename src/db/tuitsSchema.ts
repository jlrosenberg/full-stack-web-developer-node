import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  tuit: String,
  likes: Number,
  postedBy: {
    username: String
  }
}, {collection: 'tuits'});
export default schema;