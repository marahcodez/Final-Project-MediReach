import asyncHandler from "express-async-handler";
import Appointment from "../models/appointmentModel.js";

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Private (Patient)
const createAppointment = asyncHandler(async (req, res) => {
  const { doctor, date, time, reason } = req.body;

  if (!doctor || !date || !time || !reason) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const appointment = await Appointment.create({
    patient: req.user._id,
    doctor,
    date,
    time,
    reason,
  });

  res.status(201).json(appointment);
});

// @desc    Get logged in user's appointments
// @route   GET /api/appointments/myappointments
// @access  Private
const getMyAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({ patient: req.user._id })
    .populate("doctor", "name email");
  res.json(appointments);
});

// @desc    Get all appointments (Admin)
// @route   GET /api/appointments
// @access  Private/Admin
const getAllAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find()
    .populate("patient", "name email")
    .populate("doctor", "name email");
  res.json(appointments);
});

// @desc    Update appointment status
// @route   PUT /api/appointments/:id
// @access  Private/Admin
const updateAppointmentStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    appointment.status = status || appointment.status;
    const updatedAppointment = await appointment.save();
    res.json(updatedAppointment);
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
// @access  Private/Admin
const deleteAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (appointment) {
    await appointment.deleteOne();
    res.json({ message: "Appointment removed" });
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

export {
  createAppointment,
  getMyAppointments,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
};
