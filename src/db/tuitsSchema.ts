import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  tuit: String,
  likes: Number,
  postedBy: {
    username: String
  },
  handle: String,
  stats: {
    likes: Number,
    comments: Number,
    retuits: Number
  }
}, {collection: 'tuits'});
export default schema;