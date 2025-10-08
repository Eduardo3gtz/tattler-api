# Tattler API Project - v1.0.0

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)

## 📋 Project Overview

**Tattler** is a modern and sustainable restaurant directory application that transforms a static directory into a dynamic web platform. This repository contains the backend infrastructure built with MongoDB (NoSQL database) and designed to support a RESTful API using Express.js.

This initial release (v1.0.0) represents **Sprint 1**, focusing on establishing the database foundation, implementing data import mechanisms, and creating reliable backup systems.

### Project Vision

The Tattler project aims to create a scalable, maintainable, and eco-conscious platform for discovering and managing restaurant information. The three-sprint roadmap includes:

- **Sprint 1** (Current): Database infrastructure and data management
- **Sprint 2** (Upcoming): RESTful API development with Express.js
- **Sprint 3** (Future): Advanced features, optimization, and deployment

---

## 🗂️ Repository Structure

```
TATTLER-API/
│
├── backup/             # MongoDB database backups (mongodump output)
├── data/               # Initial seed data in CSV format
│   └── restaurants.csv # Sample restaurant data (5 entries)
├── scripts/            # Database import and utility scripts
│   └── import.sh       # Bash script for data import
├── screenshots/        # Visual documentation of database setup
└── README.md           # Project documentation (this file)
```

---

## 🚀 Prerequisites

Before setting up the project, ensure you have the following installed on your system:

### Required Software

1. **MongoDB Community Server** (v5.0 or higher)
   - Download: [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - This provides the core database engine (`mongod`)

2. **MongoDB Database Tools** (Separate installation)
   - Download: [MongoDB Database Tools](https://www.mongodb.com/try/download/database-tools)
   - Required for `mongoimport`, `mongodump`, and `mongorestore` commands
   - ⚠️ **Important**: In recent MongoDB versions, Database Tools are distributed separately

3. **Git** (for version control)
   - Download: [Git for Windows](https://git-scm.com/download/win)

### Windows-Specific Configuration

After installing MongoDB Server and Database Tools, you **must** add their binary paths to your system's PATH environment variable:

1. **Open Environment Variables**:
   - Right-click "This PC" → Properties → Advanced system settings → Environment Variables

2. **Edit PATH Variable**:
   - Under "System variables", find and edit `Path`
   - Add these two paths (adjust version numbers as needed):
     ```
     C:\Program Files\MongoDB\Server\7.0\bin
     C:\Program Files\MongoDB\Tools\100\bin
     ```

3. **Restart Required**:
   - Restart your computer or at minimum restart your terminal/IDE for changes to take effect

4. **Verify Installation**:
   ```bash
   mongod --version
   mongoimport --version
   mongosh --version
   ```

---

## 🔧 Setup and Installation

Follow these steps to set up the Tattler database on your local machine:

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/tattler-api.git
cd tattler-api
```

### Step 2: Start MongoDB Server

Ensure MongoDB is running on your machine:

```bash
# Start MongoDB service (Windows - run as Administrator)
net start MongoDB

# Or start manually if not installed as service
mongod --dbpath "C:\data\db"
```

### Step 3: Import Data

#### Option A: Using the Bash Script (Git Bash/WSL)

```bash
cd scripts
sh import.sh
```

#### Option B: Direct Command (Windows CMD/PowerShell)

If you encounter issues with the `sh` command on Windows, run the MongoDB import command directly:

```bash
mongoimport --uri="mongodb://localhost:27017/tattler_db" --collection=restaurants --type=csv --headerline --file=../data/restaurants.csv
```

### Expected Output

You should see a confirmation message similar to:
```
2025-10-08T10:30:45.123-0600    connected to: mongodb://localhost:27017/tattler_db
2025-10-08T10:30:45.234-0600    5 document(s) imported successfully. 0 document(s) failed to import.
```

### Step 4: Verify Database Creation

Connect to MongoDB and verify the data:

```bash
mongosh

# Inside mongosh:
use tattler_db
db.restaurants.find().pretty()
```

---

## 💾 Database Backup

The `/backup` directory contains a complete backup of the database created with `mongodump`. To restore this backup:

```bash
mongorestore --db=tattler_db ./backup/tattler_db
```

---

## 📊 Data Schema

The current `restaurants` collection includes the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Restaurant name |
| `cuisine` | String | Type of cuisine offered |
| `location` | String | Physical address |
| `rating` | Number | Rating score (1-5) |
| `eco_friendly` | Boolean | Sustainability indicator |

Sample data includes 5 restaurant entries demonstrating various cuisines and sustainability practices.

---

## 🛠️ Troubleshooting

### Common Issues on Windows

**Problem**: `'mongoimport' is not recognized as an internal or external command`

**Solution**: 
- Verify MongoDB Database Tools are installed separately
- Confirm PATH environment variable includes the Tools `bin` directory
- Restart your terminal/computer after modifying PATH

**Problem**: `'sh' is not recognized`

**Solution**:
- Install Git Bash or WSL (Windows Subsystem for Linux)
- Alternatively, run `mongoimport` commands directly in CMD/PowerShell

**Problem**: MongoDB service won't start

**Solution**:
- Ensure data directory exists: `C:\data\db`
- Check if another instance is running
- Review logs in `C:\Program Files\MongoDB\Server\7.0\log`

---

## 🔜 Next Steps

### Sprint 2: RESTful API Development
- Set up Express.js server
- Implement CRUD operations for restaurants
- Add input validation and error handling
- Create API documentation

### Sprint 3: Advanced Features
- User authentication and authorization
- Search and filtering capabilities
- Performance optimization
- Deployment to cloud platform

---

## 📸 Documentation

The `/screenshots` directory contains visual evidence of:
- Database and collection creation in MongoDB Compass
- Successful data import verification
- Sample query results

---

## 🤝 Contributing

This is currently a learning project for Sprint 1. Contributions and feedback are welcome as the project evolves through subsequent sprints.

---

## 📝 License

This project is part of an academic/learning exercise. License details to be determined.

---

## 👤 Author

**Tattler Development Team**

- GitHub: [@eduardo3gtz](https://github.com/Eduardo3gtz)

---

## 🌱 Sustainability Note

Tattler is committed to promoting eco-friendly restaurants and sustainable practices in the food industry. Our database includes sustainability indicators to help users make environmentally conscious dining choices.

---

**Version**: 1.0.0 (Sprint 1)  
**Last Updated**: October 2025  
**Status**: ✅ Database Infrastructure Complete | 🚧 API Development Pending