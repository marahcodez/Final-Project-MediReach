import express from "express";
import {
  createAppointment,
  getMyAppointments,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointmentController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Patient: create appointment
router.post("/", protect, createAppointment);

// Patient: view their own appointments
router.get("/myappointments", protect, getMyAppointments);

// Admin: view all appointments
router.get("/", protect, admin, getAllAppointments);

// Admin: update appointment status
router.put("/:id", protect, admin, updateAppointmentStatus);

// Admin: delete appointment
router.delete("/:id", protect, admin, deleteAppointment);

export default router;
