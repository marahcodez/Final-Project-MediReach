import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Middleware to check if user is admin
const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as admin");
  }
});

export { admin };
