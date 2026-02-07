// Verify where data is being stored
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

async function checkDatabase() {
  try {
    console.log('🔍 Checking database connection...\n');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas\n');
    
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    
    console.log('📦 Collections in your MongoDB database:');
    console.log('   ', collections.map(c => c.name).join(', ') || 'No collections yet');
    console.log('');
    
    // Check Posts
    const postsCollection = db.collection('posts');
    const postsCount = await postsCollection.countDocuments();
    console.log(`📝 Posts Collection: ${postsCount} documents`);
    
    if (postsCount > 0) {
      const latestPost = await postsCollection.findOne({}, { sort: { createdAt: -1 } });
      console.log(`   Latest: "${latestPost?.title || 'N/A'}"`);
    }
    console.log('');
    
    // Check Projects
    const projectsCollection = db.collection('projects');
    const projectsCount = await projectsCollection.countDocuments();
    console.log(`🚀 Projects Collection: ${projectsCount} documents`);
    
    if (projectsCount > 0) {
      const latestProject = await projectsCollection.findOne({}, { sort: { createdAt: -1 } });
      console.log(`   Latest: "${latestProject?.title || 'N/A'}"`);
    }
    console.log('');
    
    console.log('📍 Storage Location:');
    console.log('   MongoDB Atlas Cloud Database');
    console.log(`   Database: ${db.databaseName}`);
    console.log('   Connection: ✅ Active\n');
    
    await mongoose.disconnect();
    console.log('✅ Verification complete!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkDatabase();
