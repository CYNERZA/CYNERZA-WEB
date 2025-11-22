import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS Configuration
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
    'https://cynerza.com',
    'https://www.cynerza.com',
    'https://backend.cynerza.com',
    'http://localhost:8080' // Keep for local development
  ]

  : [
    'http://localhost:8998',
    'http://localhost:5173',
    'http://127.0.0.1:8080',
    'http://127.0.0.1:5173'
  ];

// CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.send("Welcome to CYNERZA");
})

app.get("/health", (_, res) => {
  const requiredEnvVars = [
    'MONGODB_ATLAS_URL',
    'ACCESS_TOKEN_SECRET',
    'REFRESH_TOKEN_SECRET'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  const healthStatus = {
    status: missingVars.length > 0 ? "unhealthy" : "healthy",
    timestamp: new Date().toISOString(),
    service: "cynerza-backend",
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    ...(missingVars.length > 0 && { missingEnvironmentVariables: missingVars })
  };

  const statusCode = missingVars.length > 0 ? 503 : 200;
  res.status(statusCode).json(healthStatus);
});


// import route
import userRouter from "./routes/user.routes.js"
import blogRouter from "./routes/blog.routes.js";
import departmentRouter from "./routes/department.routes.js";
import jobPostRouter from "./routes/jobPost.routes.js";
import industryRouter from "./routes/industry.routes.js";


// apis
app.use("/api/v1/users", userRouter)
app.use("/api/v1/blogs", blogRouter)
app.use("/api/v1/departments", departmentRouter)
app.use("/api/v1/industries", industryRouter)
app.use("/api/v1/job-posts", jobPostRouter)


export { app }