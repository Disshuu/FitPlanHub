# FitPlanHub - Trainers & Users Platform

## Project Overview
FitPlanHub is a full-stack application designed to connect certified fitness trainers with users.
Trainers can create and manage fitness plans, while users can browse plans, follow trainers, and subscribe to paid plans.

This project mainly focuses on **backend logic, API design, authentication flow, and database relationship**.

---

## Core Features

### 1. User & Trainer Authentication
- Separate roles for **User** and **Trainer**
- Signup and Login functionality
- Password hashing
- Token-based authentication (JWT concept)

---

### 2. Trainer Dashboard
Trainers can:
- Create fitness plans
- Update their own plans
- Delete their own plans

Each plan includes:
- Title
- Description
- Price
- Duration

---

### 4. Access Control
- Subscribed users can view full plan details
- Non-subscribed users only see:
  - Plan title
  - Trainer name
  - Price

---

### 5. Follow Trainers
Users can:
- Follow or unfollow trainers
- View a list of trainers they follow

---

### 6. Personalized Feed
After login, users can:
- See plans created by trainers they follow
- View plans they have subscribed to
- Get trainer information with each plan

---

### Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT
- **Frontend:** React ( basic structure)

---

## Project Structure
FitPlanHub/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ └── server.js
│
├── frontend/
│ ├── src/
│ └── public/
│
└── README.md

 ## How to Run Backend
 1. Install dependencies ''' bash   npm install
 2. Create .env file
    PORT = 5000                                               MONGO_URI=mongodb://127.0.0.1:27017/fitplanhub            JWT_SECRET=secretkey
 3. Start server
    cd backend
    node server.js

 ## API Endpoint 
 Authentication
 - POST /api/auth/signup
 - POST /api/auth/login

 Plans
 - POST /api/plans
 - GET  /api/plans
 - PUT  /api/plans/:id
 - DELETE /api/plans/:id

 Users
 - POST /api/users/follow/:trainerId
 - POST /api/users/unfollow/:trainerId
 - GET  /api/users/feed

 ## Notes
 - Payment is simulated
 - Role-based access is handled at route level
 - Project is designed for learning backend architecture and API development

## Author
Developed as a part of a backend development task to demonstrate real-world application logic and database relationship.
 
 






