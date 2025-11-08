# TaskMate – Modern MERN Task Management App

TaskMate is a full-stack task management application built using the **MERN stack**.  
It includes secure authentication, a clean and responsive UI, full CRUD operations,  
highlighted search, filters, and a smooth user experience optimized for internship-level expectations.

---

## 🚀 Live Demo  
Frontend: YOUR_FRONTEND_LINK  
Backend API: YOUR_BACKEND_LINK  

---

## ✅ Features

### 🔐 Authentication
- User Registration  
- User Login  
- Protected Dashboard  
- JWT Security  
- Password Hashing with bcrypt  

### ✅ Dashboard
- Add tasks  
- Edit tasks  
- Delete tasks  
- Mark tasks as Complete / Undo  
- Instant UI refresh  

### 🔍 Search + Filter
- Search box with **Search button**  
- **Highlighted matching text**  
- “No tasks found” message  
- Filter by: **All / Completed / Pending**  

### 🎨 Frontend (React + TailwindCSS)
- Vite setup  
- Fully responsive  
- Clean modern UI  
- Smooth interactions  

### 🗄 Backend (Node.js + Express + MongoDB)
- REST API  
- MongoDB Atlas connection  
- Mongoose models  
- JWT authorization middleware  
- Robust folder structure  

---

## 🛠 Tech Stack

### **Frontend**
- React (Vite)
- TailwindCSS
- Axios
- React Router DOM

### **Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt.js

---

# 📁 Folder Structure


TaskMate/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── screenshots/
├── postman_collection/
├── SCALING-NOTES.md
└── README.md


---

# ⚙️ Environment Variables

## ✅ Backend (.env)

PORT=5000
MONGO_URI=your-mongodb-string
JWT_SECRET=your-secret


## ✅ Frontend (.env)

VITE_API_URL=https://your-backend-url.onrender.com/api


---

# ▶️ Running Project Locally

## ✅ Backend
```
cd backend
npm install
npm start

Runs at:

http://localhost:5000


## ✅ Frontend

cd frontend
npm install
npm run dev

Runs at:

http://localhost:5173


---

# 📦 Deployment Instructions (for reviewers)

### ✅ Backend (Render)
- Hosting: Render Web Service  
- Start command: `node server.js`  
- Build: `npm install`  
- Env variables added (PORT, MONGO_URI, JWT_SECRET)  
- MongoDB Atlas connected  
- Deployed backend URL used in frontend `.env`

### ✅ Frontend (Netlify/Vercel)
- Build command: `npm run build`  
- Publish folder: `/dist`  
- Environment variable: `VITE_API_URL=BACKEND_URL/api`  
- Deployment linked to GitHub main branch  

---

# 🧪 API Documentation

Postman Collection included in:


/postman_collection/TaskMate.postman_collection.json


API Routes:

POST /auth/register
POST /auth/login
GET  /auth/me
GET  /tasks
POST /tasks
PUT  /tasks/:id
DELETE /tasks/:id


---

# 📈 SCALING-NOTES.md

## 1. Frontend Scaling
- Move UI components into separate reusable folders  
- Add Redux or Zustand for global state as task count grows  
- Use infinite scroll or pagination for huge task datasets  
- Add form validation library (React Hook Form)

## 2. Backend Scaling
- Use MongoDB indexes for faster search  
- Introduce API Versioning: `/api/v1/tasks`  
- Add rate limiting, helmet, and CORS rules for security  
- Add refresh tokens for long sessions  
- Create separate microservices if tasks grow too large  

## 3. Deployment Scaling
- Move backend to a dedicated server when user count increases  
- Use load balancers  
- Add auto-scaling on high traffic  
- Use CI/CD pipelines to automate deployment

---

# 📸 Screenshots
Place the following in `/screenshots`:

- 01_login.png  
- 02_register.png  
- 03_dashboard.png  
- 04_add_task.png  
- 05_edit_task.png  
- 06_delete_task.png  
- 07_search_highlight.png  
- 08_no_results.png  
- 09_responsive_mobile.png  

---

# ✅ GitHub Description Tagline
Add this under your GitHub repo name:


A modern MERN Task Manager App with authentication, CRUD, highlighted search, filters, and clean UI — built for internship submission.


---

# ✅ Submission Email (copy & send)

Subject:
```
TaskMate – Assignment Submission (Deeksha S Naik)
```

Body:
```
Hi Team,

I am submitting my completed assignment for the Frontend Developer Intern role.

Project Name: TaskMate – MERN Task Management App

✅ Live Frontend: YOUR_FRONTEND_URL  
✅ Live Backend: YOUR_BACKEND_URL  
✅ GitHub Repo: YOUR_REPO_URL  

The repository includes:
– Full frontend and backend code  
– Postman collection  
– Scaling notes  
– Deployment instructions  
– Screenshots demonstrating the UI  

Please let me know if any additional details are required.  
Thank you for the opportunity.

Regards,  
Deeksha Shankar Naik  
Phone: 9945022720  
Email: snaikdeeksha2@gmail.com
```

---

# ✅ End of Submission Package ✅

