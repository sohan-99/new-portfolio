/**
 * Migration Script: JSON to MongoDB
 * 
 * This script migrates existing posts and projects from JSON files to MongoDB
 * 
 * Usage: node scripts/migrate-to-mongodb.js
 */

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}

// Define Schemas
const PostSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: '' },
    category: { type: String, default: 'Uncategorized' },
    tags: { type: [String], default: [] },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ProjectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String, default: '' },
    image: { type: String, default: '' },
    gallery: { type: [String], default: [] },
    techStack: { type: [String], default: [] },
    category: { type: String, default: 'frontend' },
    github: { type: String, default: '' },
    liveUrl: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);
const Project = mongoose.model('Project', ProjectSchema);

// Migration Functions
async function migratePosts() {
  const postsFile = path.join(__dirname, '../data/posts.json');
  
  if (!fs.existsSync(postsFile)) {
    console.log('⚠️  No posts.json found, skipping posts migration');
    return;
  }

  const postsData = JSON.parse(fs.readFileSync(postsFile, 'utf-8'));
  
  if (postsData.length === 0) {
    console.log('⚠️  posts.json is empty');
    return;
  }

  console.log(`📝 Migrating ${postsData.length} posts...`);
  
  for (const post of postsData) {
    try {
      await Post.findOneAndUpdate(
        { id: post.id },
        post,
        { upsert: true, new: true }
      );
      console.log(`  ✅ Migrated: ${post.title}`);
    } catch (error) {
      console.error(`  ❌ Failed to migrate post ${post.id}:`, error.message);
    }
  }
}

async function migrateProjects() {
  const projectsFile = path.join(__dirname, '../data/dashboard-projects.json');
  
  if (!fs.existsSync(projectsFile)) {
    console.log('⚠️  No dashboard-projects.json found, skipping projects migration');
    return;
  }

  const projectsData = JSON.parse(fs.readFileSync(projectsFile, 'utf-8'));
  
  if (projectsData.length === 0) {
    console.log('⚠️  dashboard-projects.json is empty');
    return;
  }

  console.log(`🚀 Migrating ${projectsData.length} projects...`);
  
  for (const project of projectsData) {
    try {
      await Project.findOneAndUpdate(
        { id: project.id },
        project,
        { upsert: true, new: true }
      );
      console.log(`  ✅ Migrated: ${project.title}`);
    } catch (error) {
      console.error(`  ❌ Failed to migrate project ${project.id}:`, error.message);
    }
  }
}

// Main Migration
async function runMigration() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    await migratePosts();
    console.log('');
    await migrateProjects();

    console.log('\n✨ Migration completed successfully!');
    console.log('\n📊 Database Stats:');
    const postCount = await Post.countDocuments();
    const projectCount = await Project.countDocuments();
    console.log(`   Posts: ${postCount}`);
    console.log(`   Projects: ${projectCount}`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\n👋 Disconnected from MongoDB');
  }
}

// Run the migration
runMigration();
