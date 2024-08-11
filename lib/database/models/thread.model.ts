import { Schema, model, models } from 'mongoose';

const ThreadSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userFirstName: { type: String },
    userProfilePic: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    voters: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
  },
  { timestamps: true }
);

const Thread = models.Thread || model('Thread', ThreadSchema);
export default Thread;
