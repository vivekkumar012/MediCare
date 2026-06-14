import express from "express"
import cors from "cors";
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from "./config/db.js";
import doctorRouter from "./routes/doctorRouter.js";
import serviceRouter from "./routes/serviceRouter.js";
import appointmentRouter from "./routes/appointmentRouter.js";
import serviceAppointmentRouter from "./routes/serviceAppointmentRouter.js";

const app = express();
const port = 4000;

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",    // ← Docker frontend
    "http://localhost:3001",    // ← Docker admin
    "http://frontend:80",       // ← Docker internal
    "http://admin:80",          // ← Docker internal
]

//Middlewares
app.use(cors(
    {
        origin: function (origin, callback) {
            if(!origin) return callback(null, true);
            if(allowedOrigins.includes(origin)) {
                return callback(null, true)
            }
            return callback(new Error("Not allowed by CORS"));

        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }
));
app.use(clerkMiddleware());
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

//DB
connectDB();

//Routes/

// for docker
app.get("/health", (req, res) => {
    res.json({ 
        status: "ok", 
        uptime: process.uptime(),
        db: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
    });
});

app.use("/api/doctors", doctorRouter);
app.use("/api/services", serviceRouter);
app.use("/api/appointments", appointmentRouter);
app.use("/api/service-appointments", serviceAppointmentRouter);


app.get("/", (req, res) => {
    res.send("Hello From Backend!!!")
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
})