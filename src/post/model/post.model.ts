import mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    description: String,
  },
  {
    timestamps: true,
    collection: 'posts',
  },
);

export interface Post extends mongoose.Document {
  title: string;
  content: string;
  description: string;
}
