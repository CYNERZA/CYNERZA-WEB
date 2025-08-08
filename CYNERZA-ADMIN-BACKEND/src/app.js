import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (_, res) => {
    res.send("Welcome to CYNERZA");
})
// import route
import userRouter from "./routes/user.routes.js"
import blogRouter from "./routes/blog.routes.js";

// apis
app.use("/api/v1/users", userRouter)
app.use("/api/v1/blogs", blogRouter)


export {app}