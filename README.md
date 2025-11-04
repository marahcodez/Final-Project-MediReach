🩺 MediReach – Appointment & Reminder System

MediReach is a healthcare web platform built using the MERN stack (MongoDB, Express.js, React, Node.js).
It aims to streamline doctor-patient appointment management and provide timely reminders for medical visits or medications — supporting UN SDG 3: Good Health and Well-being.

🚀 Features Implemented (So Far)
✅ User Management (Authentication & Authorization)

Register and login users with encrypted passwords (bcrypt + JWT).

Role-based access control: admin, doctor, patient.

JWT-protected routes using middleware.

✅ Appointment Management

Patients can create and view their appointments.

Admins can view, update, or delete any appointment.

Appointment schema includes:

Patient & Doctor reference

Date & Time

Reason

Status (pending, confirmed, completed, cancelled)

⚙️ Backend Setup

Node.js + Express.js backend connected to MongoDB Atlas.

Organized MVC structure:

backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
└── .env

🧠 Tech Stack
Layer	Technology
Frontend	React.js (to be implemented)
Backend	Node.js + Express.js
Database	MongoDB Atlas
Authentication	JSON Web Tokens (JWT)
Middleware	express-async-handler, bcryptjs
Version Control	Git + GitHub
⚡ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/MediReach.git
cd MediReach/backend

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env File in the backend Folder
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run the Server
npm run dev


Server runs on:
👉 http://localhost:5000

📡 API Endpoints
👤 User Routes
Method	Endpoint	Access	Description
POST	/api/users/register	Public	Register new user
POST	/api/users/login	Public	Login user
GET	/api/users/profile	Private	Get logged-in user details
🩺 Appointment Routes
Method	Endpoint	Access	Description
POST	/api/appointments	Private (Patient)	Create new appointment
GET	/api/appointments/myappointments	Private (Patient)	Get logged-in patient’s appointments
GET	/api/appointments	Private (Admin)	Get all appointments
PUT	/api/appointments/:id	Private (Admin)	Update appointment status
DELETE	/api/appointments/:id	Private (Admin)	Delete appointment
📘 Folder Structure (Backend)
backend/
│
├── controllers/
│   ├── userController.js
│   └── appointmentController.js
│
├── models/
│   ├── userModel.js
│   └── appointmentModel.js
│
├── routes/
│   ├── userRoutes.js
│   └── appointmentRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│
├── config/
│   └── db.js
│
├── server.js
└── .env

🧩 Next Steps

Implement appointment reminders (email/SMS notifications).

Build frontend with React.js (user-friendly dashboards).

Integrate scheduling calendar for doctors.

👨‍💻 Author

Ukpai Amarachi
Fullstack Software Engineer | PLP Africa
📍 Abuja, Nigeria
📧 beckyezinne@gmail.com

🌐 GitHub – marahcodez