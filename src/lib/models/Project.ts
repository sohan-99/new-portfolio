import mongoose, { Schema, model, models } from 'mongoose';

export interface IProject {
  _id?: string;
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  techStack: string[];
  category: string;
  github: string;
  liveUrl: string;
  featured: boolean;
  date: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
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
    longDescription: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    gallery: {
      type: [String],
      default: [],
    },
    techStack: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      default: 'frontend',
      enum: ['frontend', 'backend', 'fullstack', 'mobile', 'other'],
    },
    github: {
      type: String,
      default: '',
    },
    liveUrl: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
// Note: id field already has index due to unique: true
ProjectSchema.index({ featured: 1 });
ProjectSchema.index({ category: 1 });

const Project = models.Project || model<IProject>('Project', ProjectSchema);

export default Project;
