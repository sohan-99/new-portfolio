import mongoose, { Schema, model, models } from 'mongoose';

export interface IPost {
  _id?: string;
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    image: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'Uncategorized',
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
// Note: id field already has index due to unique: true
PostSchema.index({ published: 1 });
PostSchema.index({ category: 1 });

const Post = models.Post || model<IPost>('Post', PostSchema);

export default Post;
