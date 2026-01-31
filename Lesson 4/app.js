import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import userRoutes from "./routes/user.routes.js";

// load env
dotenv.config();

const app = express();

app.use(express.json());

// 🔐 Passport init
app.use(passport.initialize());

// 👇 YAHAN tumhara passport code load hoga
import "./passport/jwt.strategy.js";

app.use("/api/users", userRoutes);

export default app;
