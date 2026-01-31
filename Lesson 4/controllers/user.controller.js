import jwt from "jsonwebtoken";
import { users } from "../models/user.model.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login successful",
    token,
  });
};

export const profile = (req, res) => {
  // 👇 passport yahan req.user dega
  res.json({
    message: "Protected profile route",
    user: req.user,
  });
};
