# Leave Management System (MERN Stack)

A full-stack **Leave Management System** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. This application allows employees to apply for leave and track their leave status, while administrators can review and update leave requests.

---

## 🚀 Project Overview

Organizations use Leave Management Systems to efficiently manage employee leave requests. This project simulates a real-world corporate HR workflow with clear **role separation** between employees and administrators.

* **Employee**: Apply for leave and view leave status
* **Admin**: View all leave requests and update their status (Pending / Approved / Rejected)

---

## 🛠️ Tech Stack

### Frontend

* React.js (Functional Components)
* React Hooks (`useState`, `useEffect`)
* Axios
* Bootstrap 5 + Custom CSS

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* CORS
* dotenv

### Deployment

* Backend deployed on **Render**
* Database hosted on **MongoDB Atlas**

---

## ✨ Features

### Employee Features

* Apply for leave with details:

  * Employee Name
  * Leave Type (Casual, Sick, Earned, etc.)
  * From Date & To Date
  * Reason
* View all submitted leave requests
* View leave status with color-coded badges

### Admin Features

* View all employee leave requests
* Update leave status using dropdown:

  * Pending
  * Approved
  * Rejected
* Responsive admin dashboard

### UI/UX

* Responsive design (mobile & desktop)
* Clean card-based layout
* Color-coded curved status badges:

  * 🟡 Pending
  * 🟢 Approved
  * 🔴 Rejected

---

## 🧩 System Architecture

```
Frontend (React)
   |
   |  Axios (REST API)
   |
Backend (Node + Express)
   |
   |  Mongoose
   |
MongoDB Atlas
```

---

## 📂 Project Structure

```
Leave-Management-System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Leave.js
│   ├── routes/
│   │   └── leaveRoutes.js
│   ├── server.js
│   ├── .env
│
├── frontend/
│   ├── src/
│   │   ├── api.js
│   │   ├── components/
│   │   │   ├── ApplyLeave.js
│   │   │   └── LeaveList.js
│   │   ├── Pages/
│   │   │   ├── AdminPage.js
│   │   │   └── EmployeePage.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│
├── .gitignore
├── README.md
```

---

## 🔗 Backend API Endpoints

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| POST   | `/api/leaves`     | Submit a leave request   |
| GET    | `/api/leaves`     | Fetch all leave requests |
| PUT    | `/api/leaves/:id` | Update leave status      |

---

## 🌐 Deployed Backend URL

```
https://leave-managament-system.onrender.com
```

Example API:

```
GET https://leave-managament-system.onrender.com/api/leaves
```

---

## 🔐 Environment Variables (Backend)

Create a `.env` file inside the `backend` folder:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/leaveDB
```

> ⚠️ `.env` is excluded from Git using `.gitignore`

---

## ▶️ How to Run Locally

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🧠 Key Learnings / Concepts Used

* RESTful API design
* Environment variable management using dotenv
* CORS handling for cross-origin requests
* MongoDB Atlas IP whitelisting
* Separation of concerns (Admin vs Employee)
* Responsive UI design with Bootstrap
* Centralized Axios configuration

---

## 🗣️ Explanation of this project

> "This is a MERN stack Leave Management System where employees can apply for leave and track their status, while admins manage approvals. The backend exposes REST APIs secured via environment variables and deployed on Render. The frontend is responsive, role-based, and communicates with the backend using a centralized Axios instance."

---

## 🚀 Future Enhancements

* Authentication & authorization (JWT)
* Role-based route protection
* Filter leaves by employee
* Pagination & search
* Email notifications
* Audit log for status changes

---

## 👨‍💻 Author

**Sagar Kumar Das**
B.Tech – Computer Science & Engineering
IIIT Ranchi

---

⭐ If you like this project, feel free to star the repository!!
