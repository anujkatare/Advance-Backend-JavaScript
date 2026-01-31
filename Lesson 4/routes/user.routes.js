import express from "express";
import passport from "passport";
import { login, profile } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", login);

// 🔐 Protected route
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  profile
);

export default router;
