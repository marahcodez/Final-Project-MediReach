import User from "../models/userModel.js";
import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// ✅ Protected route example
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user,
  });
});

import { admin } from "../middleware/adminMiddleware.js";

// Admin can see all users
router.get("/all", protect, admin, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Delete a user (Admin only)
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Register an admin user (temporary route)
router.post("/register-admin", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newAdmin = await User.create({
      name,
      email,
      password,
      role: "admin", // 👈 automatically make this user an admin
    });

    if (newAdmin) {
      res.status(201).json({
        _id: newAdmin.id,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
      });
    } else {
      res.status(400).json({ message: "Invalid admin data" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
