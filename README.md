# 🏥 MediCare — Healthcare Appointment Platform

A full-stack MERN healthcare management system with dual frontend portals — one for **patients & doctors** and one for **admins**. Built with React, Node.js, Express, MongoDB, Clerk Auth, Stripe Payments, and Cloudinary.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite (x2 portals) |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Auth | Clerk (patients/users) + JWT (doctors) |
| Payments | Stripe Checkout |
| Storage | Cloudinary (images) |

---

## 📁 Project Structure

```
medicare/
├── backend/                  # Express API server (port 4000)
│   ├── config/db.js
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   ├── doctorController.js
│   │   ├── serviceController.js
│   │   └── serviceAppointmentController.js
│   ├── middlewares/doctorAuth.js
│   ├── models/
│   │   ├── Appointment.js
│   │   ├── Doctor.js
│   │   ├── Service.js
│   │   └── ServiceAppointment.js
│   ├── routes/
│   │   ├── appointmentRouter.js
│   │   ├── doctorRouter.js
│   │   ├── serviceRouter.js
│   │   └── serviceAppointmentRouter.js
│   └── utils/cloudinary.js
│
├── frontend/                 # Patient & Doctor portal (port 5173)
└── admin/                    # Admin panel (port 5174)
```

---

## ⚙️ Environment Variables

Create a `.env` file in `/backend`:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAJOR_ADMIN_ID=your_admin_clerk_user_id
```

---

## 🔑 Authentication

- **Patients/Users** — Clerk-based authentication via `@clerk/express`
- **Doctors** — Custom JWT authentication (`Authorization: Bearer <token>`)
- **Admin** — Clerk-based authentication (separate portal)

---

## 📡 API Endpoints

### Doctors `/api/doctors`
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/` | None | List all doctors |
| GET | `/:id` | None | Get doctor by ID |
| POST | `/` | None | Create doctor (signup) |
| POST | `/login` | None | Doctor login → JWT |
| PUT | `/:id` | Doctor JWT | Update profile |
| POST | `/:id/toggle-availability` | Doctor JWT | Toggle availability |
| DELETE | `/:id` | None | Delete doctor |

### Appointments `/api/appointments`
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/` | None | List appointments (filterable) |
| POST | `/` | Clerk | Book appointment |
| GET | `/me` | Clerk | Patient's appointments |
| GET | `/confirm?session_id=` | None | Confirm Stripe payment |
| GET | `/stats/summary` | None | Admin stats |
| GET | `/doctor/:doctorId` | None | Doctor's appointments |
| PUT | `/:id` | None | Update appointment |
| GET | `/patients/count` | None | Registered user count |

### Services `/api/services`
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/` | None | List all services |
| GET | `/:id` | None | Get service by ID |
| POST | `/` | None | Create service (admin) |
| PUT | `/:id` | None | Update service |
| DELETE | `/` | None | Delete service |

### Service Appointments `/api/service-appointment`
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/` | None | List service appointments |
| POST | `/` | Clerk | Book service appointment |
| GET | `/me` | Clerk | Patient's service appointments |
| GET | `/confirm?session_id=` | None | Confirm payment |
| GET | `/stats/summary` | None | Stats |
| PUT | `/:id` | None | Update |
| POST | `/:id/cancel` | None | Cancel |

---

## 💳 Payment Flow (Stripe)

1. Patient books appointment → backend creates Stripe Checkout Session
2. Patient redirected to Stripe → pays
3. Stripe redirects to `/appointment/success?session_id=`
4. Frontend calls `/api/appointments/confirm?session_id=` → status set to `Confirmed`

**Free appointments** are confirmed immediately. **Cash appointments** remain `Pending` until manually confirmed.

---

## 🖼️ Image Uploads

Doctor and service images are uploaded via `multer` (temp `/tmp`) then pushed to **Cloudinary**. Old images are deleted from Cloudinary on update.

---

## 🛠️ Local Setup

```bash
# 1. Clone and install
git clone https://github.com/your-username/medicare.git
cd medicare/backend && npm install
cd ../frontend && npm install
cd ../admin && npm install

# 2. Configure .env in /backend

# 3. Run all three
# Terminal 1 — Backend
cd backend && npm run dev

# Terminal 2 — Frontend
cd frontend && npm run dev      # http://localhost:5173

# Terminal 3 — Admin
cd admin && npm run dev         # http://localhost:5174
```

---

## 🌐 Deployment Notes

- Set `FRONTEND_URL` env var on the backend to your production frontend URL
- CORS is configured to allow both portals; update `allowedOrigins` for production domains
- Stripe webhook configuration recommended for production payment reliability

---

## 📄 License

MIT
---

## 🚀 Future Enhancements

* 📱 Mobile application support
* 🔔 Real-time appointment notifications
* 📊 Advanced analytics dashboard
* 🎥 Video consultation integration
* 📅 Google Calendar synchronization
* 🧾 Automated invoice generation

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

### 💙 Built to simplify healthcare management

**MediCare** connects patients, doctors, and administrators through a modern, secure, and scalable healthcare ecosystem.

⭐ If you found this project useful, consider giving it a star.

<br>

### ✨ Crafted with passion by Vivek ✨

```text
██╗   ██╗██╗██╗   ██╗███████╗██╗  ██╗
██║   ██║██║██║   ██║██╔════╝██║ ██╔╝
██║   ██║██║██║   ██║█████╗  █████╔╝
╚██╗ ██╔╝██║╚██╗ ██╔╝██╔══╝  ██╔═██╗
 ╚████╔╝ ██║ ╚████╔╝ ███████╗██║  ██╗
  ╚═══╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
```

### 🚀 Made by Vivek

*Turning ideas into impactful digital experiences.*

</div>
