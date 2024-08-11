import { Schema, model, models } from 'mongoose';

const CommentSchema = new Schema(
  {
    text: { type: String, required: true },
    thread: { type: Schema.Types.ObjectId, ref: 'Thread', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

const Comment = models.Comment || model('Comment', CommentSchema);
export default Comment;
