import { Schema, model, models } from 'mongoose';

const commentSchema = new Schema({
  thread: { type: Schema.Types.ObjectId, ref: 'Thread', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  userName: { type: String, required: true }, // Add the user's name
  userPhoto: { type: String, required: true }, // Add the user's photo URL
}, { timestamps: true });

const Comment = models.Comment || model('Comment', commentSchema);
export default Comment;
