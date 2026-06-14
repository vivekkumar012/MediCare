# 🏥 Medicare HMS

A production-grade Healthcare Management System built with the MERN Stack that streamlines hospital operations through dedicated Patient, Doctor, and Admin portals.

---

## 🚀 Overview

Medicare HMS is a full-stack healthcare platform designed to automate and simplify real-world hospital workflows.

The system supports three distinct roles:

* 👤 Patients
* 👨‍⚕️ Doctors
* 🛡️ Administrators

Patients can book appointments and healthcare services, doctors can manage schedules and appointments, and administrators can oversee the entire healthcare ecosystem through a centralized dashboard.

The backend is designed with scalability in mind using MongoDB indexing, aggregation pipelines, pagination, modular architecture, and production-ready REST APIs.

---

## 🌐 Live Demo

| Platform | URL |
|-----------|-----|
| Patient Portal | https://medi-care-sage.vercel.app/ |
| Admin Dashboard | https://medicare-admin-six.vercel.app/ |

### Test Credentials

Doctors can log in using credentials created by the Administrator.

For demo access, contact the repository owner.

# ✨ Features

## 👤 Patient Portal

### Authentication

* Clerk Authentication
* Secure Session Management
* Protected Routes

### Functionalities

* Browse doctors
* View doctor profiles
* Book appointments
* View booked appointments
* Browse healthcare services
* Responsive user experience

---

## 👨‍⚕️ Doctor Portal

### Authentication

* Admin-created doctor accounts
* Email & Password login
* JWT-based authentication
* Protected doctor routes

### Functionalities

* Manage doctor profile
* Add appointment slots
* Manage availability
* View all appointments
* Reschedule appointments
* Track appointment status

### Doctor Analytics Dashboard

* Total Earnings
* Total Appointments
* Completed Appointments
* Cancelled Appointments
* Performance Insights

---

## 🛡️ Admin Portal

### Authentication

* Clerk Authentication
* Role-based authorization

### Functionalities

* Add new doctors
* Manage doctors
* Manage healthcare services
* Monitor appointments
* View patient statistics
* Manage hospital operations

### Admin Analytics Dashboard

* Total Revenue
* Total Patients
* Total Doctors
* Appointment Statistics
* Service Insights

---

# 🏗️ System Architecture

Patients Frontend (React)
│
▼
REST APIs
│
▼
Node.js + Express.js
│
▼
MongoDB

Doctors Frontend ─────┘
Admin Frontend ───────┘

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Context API

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication

### Patients & Admins

* Clerk Authentication
* Session Management

### Doctors

* JWT Authentication
* bcrypt Password Hashing

## Database

* MongoDB Atlas

## Deployment

* Vercel
* Render / Railway (Backend)

---

# 📊 Core Modules

## Appointment Management

* Appointment Booking
* Appointment Cancellation
* Appointment Rescheduling
* Slot Management
* Appointment Status Tracking

## Doctor Management

* Doctor Onboarding
* Doctor Authentication
* Profile Management
* Availability Management
* Earnings Tracking
* Performance Analytics

## Service Management

* Add Healthcare Services
* Update Services
* Delete Services
* Service Availability Controls

## Analytics Engine

* Revenue Analytics
* Doctor Earnings Analytics
* Appointment Analytics
* Patient Growth Analytics
* Hospital Performance Insights

## 💳 Payment Management

Patients can pay for appointments using multiple payment methods.

### Supported Payment Methods

- Stripe Payment Gateway
- Cash on Appointment

### Features

- Secure Stripe Checkout Integration
- Online Appointment Payments
- Cash Payment Support
- Payment Status Tracking
- Payment Verification
- Booking Confirmation after Successful Payment

---

# ⚡ Performance Optimizations

## MongoDB Indexing

Implemented indexes on frequently queried fields:

* doctorId
* userId
* appointmentDate
* status
* createdAt

### Benefits

* Faster database lookups
* Reduced query execution time
* Improved dashboard performance

---

## Aggregation Pipelines

Used MongoDB Aggregation Framework for:

* Revenue calculations
* Doctor earnings reports
* Appointment statistics
* Analytics dashboards
* Service performance metrics

### Benefits

* Reduced server-side computation
* Faster analytics generation
* Efficient reporting

---

## Server-Side Pagination

Implemented pagination for:

* Doctors Listing
* Appointments Listing
* Services Listing
* Patient Records

### Benefits

* Better scalability
* Reduced payload size
* Improved user experience

---

# 🔐 Security Features

* Clerk Authentication
* JWT Authentication
* bcrypt Password Hashing
* Role-Based Access Control (RBAC)
* Protected API Routes
* Input Validation
* Error Handling Middleware
* Secure Environment Variables

---

# 🌐 REST API Highlights

## Authentication APIs

* User Login/Register
* Admin Authentication
* Doctor Login
* Token Verification

## Doctor APIs

* Add Doctor
* Update Doctor Profile
* Add Slots
* Manage Availability
* Doctor Analytics

## Appointment APIs

* Create Appointment
* Get Appointments
* Cancel Appointment
* Reschedule Appointment
* Appointment Status Updates

## Service APIs

* Create Service
* Update Service
* Delete Service
* Get Services

## Admin APIs

* Dashboard Analytics
* Doctor Management
* Appointment Monitoring
* Revenue Reports

---

# 📈 Analytics

## Doctor Dashboard

Provides real-time insights including:

* Total Earnings
* Completed Appointments
* Cancelled Appointments
* Total Bookings
* Patient Engagement Metrics

## Admin Dashboard

Provides hospital-wide analytics including:

* Total Revenue
* Total Doctors
* Total Patients
* Appointment Metrics
* Service Utilization Insights

---

# 📂 Folder Structure

```bash
client/
├── src/
├── components/
├── pages/
├── context/
└── services/

admin/
├── src/
├── pages/
├── components/
└── services/

backend/
├── controllers/
├── routes/
├── models/
├── middlewares/
├── utils/
└── config/
```

# 🎯 Key Highlights

✅ Multi-Role Healthcare Platform

✅ Separate Patient, Doctor & Admin Workflows

✅ Clerk Authentication for Users & Admins

✅ JWT Authentication for Doctors

✅ Appointment Booking & Rescheduling

✅ Doctor Slot Management

✅ Service Management System

✅ Revenue & Performance Analytics

✅ MongoDB Aggregation Pipelines

✅ Database Indexing

✅ Server-Side Pagination

✅ Production-Ready REST APIs

✅ Scalable Backend Architecture

---

# 🔮 Future Improvements

* Video Consultations
* Medical Records Management
* Prescription Management
* Email Notifications
* SMS Notifications
* AI-Based Appointment Recommendations

---

# 👨‍💻 Author

Built with ❤️ By Vivek.

If you found this project useful, consider giving it a ⭐ on GitHub.
