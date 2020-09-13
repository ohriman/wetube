import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  /*, 이런 방법도 있다. Comment에 연결 된 Video ID를 주는 방식
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }
  */
});

const model = mongoose.model("Comment", CommentSchema);

export default model;