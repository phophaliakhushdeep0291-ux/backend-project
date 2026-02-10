# 🎬 Video Streaming Platform Backend

A full-featured backend for a **video streaming platform** with user authentication, email verification, password reset via OTP, and advanced video management using **caching, pagination, indexing, and aggregation pipelines**.

---

## 🚀 Features

### **User Module**
- User registration & login  
- Logout  
- Email verification  
- Forgot password using OTP  
- JWT authentication & middleware for protected routes  

### **Video Module**
- Fetch video by ID with **LRU caching** for frequent access  
- Incremental **views update** for videos  
- Fetch all videos with **pagination, indexing, and aggregation pipelines**  
- Performance logging (cache hits/misses & response time)  
- Supports **random video selection** for testing  

### **General**
- Centralized **error handling middleware**  
- Modular and scalable project structure  
- Easy integration with a frontend  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB & Mongoose  
- **Authentication:** JWT  
- **Email Service:** Nodemailer  
- **Caching:** LRU cache (`lru-cache` package)  
- **Testing:** Postman  

---

## 📁 Project Structure
video-platform-backend/
│
├─ src/
│ ├─ controllers/
│ │ ├─ user.controller.js # Register, login, logout, email verification, OTP
│ │ └─ video.controller.js # Fetch video, caching, aggregation, indexing,
│ ├─ models/
│ │ ├─ user.model.js
│ │ └─ video.model.js
│ ├─ routes/
│ │ ├─ user.routes.js
│ │ └─ video.routes.js
│ ├─ middleware/
│ │ ├─ auth.js # Auth & role verification
│ │ └─ errorHandler.js # Centralized error handler
│ ├─ utils/
│ │ ├─ cache.js # LRU cache logic
│ │ ├─ email.js # Email sending
│ │ └─ passwordValidator.js # Strong password validator
│ └─ db/
|   └─ index.js
│
├─ tests/ # Optional: Postman collection / Jest tests
├─ .env.example
├─ package.json
├─ package-lock.json
├─ README.md
├─ .gitignore
├─ .prettierrc
└─ .prettierignore

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/phophaliakhushdeep0291-ux/video-platform-backend.git
cd video-platform-backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run development server
npm run dev

## 🗝️ Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

| Variable | Description |
|----------|-------------|
| `PORT` | Port where the backend will run |
| `MONGODB_URI` | MongoDB connection URI |
| `DB_NAME` | Database name |
| `CORS_ORIGIN` | Allowed frontend origin(s) |
| `ACCESS_TOKEN_SECRET` | Secret key for access tokens |
| `ACCESS_TOKEN_EXPIRY` | Expiry duration for access tokens |
| `REFRESH_TOKEN_SECRET` | Secret key for refresh tokens |
| `REFRESH_TOKEN_EXPIRY` | Expiry duration for refresh tokens |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `EMAIL_HOST` | SMTP host for sending emails |
| `EMAIL_PORT` | SMTP port |
| `EMAIL_USER` | Email account username |
| `EMAIL_PASSWORD` | Email account password |

## 📡 API Endpoints

### **User Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | /api/users/register | Register a new user |
| POST   | /api/users/login | Login a user |
| POST   | /api/users/logout | Logout a user |
| GET    | /api/users/verify-email/:token | Verify user email |
| POST   | /api/users/forgot-password | Request OTP for password reset |
| POST   | /api/users/reset-password | Reset password with OTP |

### **Video Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | /api/videos/:videoId | Get video by ID (with LRU caching) |
| GET    | /api/videos | Get all videos with pagination & filtering |
| POST   | /api/videos | Upload a new video |
| PATCH  | /api/videos/:videoId | Update video info |
| DELETE | /api/videos/:videoId | Delete a video |


## 💻 Usage Example

```bash
# Get video by ID
curl -X GET http://localhost:8000/api/videos/6985cebaa4d8a9c854296571

# Register a user
curl -X POST http://localhost:8000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"Password123"}'


---

### 4. **Caching & Performance Section (Optional)**
Since you implemented **LRU caching**, this is a cool feature to highlight:

```markdown
## ⚡ Performance & Caching

- Frequently accessed videos are stored in **LRU cache** to reduce DB queries.
- Cache hits/misses and response time are logged for monitoring.
- Supports **incremental view updates** without slowing down requests.

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a Pull Request

## 📜 License
MIT License

## 🙏 Acknowledgments
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Nodemailer](https://nodemailer.com/)
- [LRU Cache](https://www.npmjs.com/package/lru-cache)
