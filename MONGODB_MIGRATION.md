# MongoDB Migration Guide

## ✅ Migration সম্পূর্ণ হয়েছে!

আপনার portfolio website এখন **MongoDB database** ব্যবহার করছে। আগের JSON file-based storage থেকে migrate করা হয়েছে।

## 🎯 কী পরিবর্তন হয়েছে?

### আগে (JSON File Storage):
```
data/posts.json              → Blog posts
data/dashboard-projects.json → Projects
```

### এখন (MongoDB Database):
```
MongoDB Collections:
├── posts      → Blog posts সংরক্ষণ
└── projects   → Projects সংরক্ষণ
```

## 📦 যা করা হয়েছে:

1. ✅ MongoDB connection setup
2. ✅ Mongoose models তৈরি (Post & Project)
3. ✅ সব API routes update করা হয়েছে
4. ✅ Migration script তৈরি
5. ✅ Stats API MongoDB query-তে convert করা হয়েছে

## 🚀 কিভাবে ব্যবহার করবেন:

### 1. Existing Data Migration (যদি আগের data থাকে)
```bash
node scripts/migrate-to-mongodb.js
```

### 2. Development Server চালান:
```bash
yarn dev
# অথবা
npm run dev
```

### 3. Dashboard থেকে নতুন Post/Project যোগ করুন:
- Login করুন: http://localhost:3000/login
- Dashboard: http://localhost:3000/dashboard
- এখন সব data MongoDB-তে save হবে ✅

## 🗄️ Database Structure:

### Posts Collection:
```javascript
{
  id: String (unique),
  title: String,
  description: String,
  content: String,
  image: String,
  category: String,
  tags: Array<String>,
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Projects Collection:
```javascript
{
  id: String (unique),
  title: String,
  description: String,
  longDescription: String,
  image: String,
  gallery: Array<String>,
  techStack: Array<String>,
  category: String (enum),
  github: String,
  liveUrl: String,
  featured: Boolean,
  date: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Environment Variables (.env.local):
```env
MONGODB_URI=mongodb+srv://protfolio:l0BUZRBGJ3E6weqJ@cluster0.julqny1.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
```

## ✨ Features:

- ✅ **Auto-connect**: প্রতিটি API request-এ MongoDB connection check করে
- ✅ **Connection Caching**: Performance optimization এর জন্য
- ✅ **Error Handling**: Proper error messages সহ
- ✅ **Authentication**: NextAuth দিয়ে protected routes
- ✅ **Indexes**: Better query performance এর জন্য

## 📝 API Endpoints:

### Posts:
- `GET /api/posts` - সব posts পেতে
- `POST /api/posts` - নতুন post তৈরি (protected)
- `GET /api/posts/[id]` - একটি specific post
- `PUT /api/posts/[id]` - post update (protected)
- `DELETE /api/posts/[id]` - post delete (protected)
- `GET /api/posts/stats` - posts statistics

### Projects:
- `GET /api/projects` - সব projects পেতে
- `POST /api/projects` - নতুন project তৈরি (protected)
- `GET /api/projects/[id]` - একটি specific project
- `PUT /api/projects/[id]` - project update (protected)
- `DELETE /api/projects/[id]` - project delete (protected)
- `GET /api/projects/stats` - projects statistics

## 🎨 UI Changes:

**কোনো UI change করার দরকার নেই!** 

সব component আগের মতোই কাজ করবে কারণ তারা API routes থেকে data fetch করে, এবং API routes এখন MongoDB থেকে data return করছে।

## 🔄 Old JSON Files:

JSON files (`data/posts.json` এবং `data/dashboard-projects.json`) এখনও থাকবে, কিন্তু আর ব্যবহার হবে না। আপনি চাইলে backup হিসেবে রাখতে পারেন বা delete করতে পারেন।

## 🐛 Troubleshooting:

### MongoDB connection error?
```bash
# Check .env.local file এ MONGODB_URI সঠিক আছে কিনা
# MongoDB Atlas এ IP whitelist করা আছে কিনা check করুন
```

### Data দেখা যাচ্ছে না?
```bash
# Migration script আবার চালান:
node scripts/migrate-to-mongodb.js
```

### Server restart করুন:
```bash
# Development server stop করুন (Ctrl+C)
yarn dev
```

---

**🎉 Congratulations!** আপনার portfolio এখন production-ready MongoDB database ব্যবহার করছে!
