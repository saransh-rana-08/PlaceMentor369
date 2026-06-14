import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import {
  getProfile,
  saveProfile,
  getJobs,
  applyJob,
  getApplications,
  getSkillGapForJob,
  getLearningPaths
} from "../controllers/studentController.js";

const router = express.Router();

// Get logged-in student profile
router.get("/profile", verifyToken, getProfile);

// Save/update student profile
router.patch("/profile", verifyToken, saveProfile);

// Get all approved jobs
router.get("/jobs", verifyToken, getJobs);

// Apply for a job
// backend/routes/studentRoutes.js
router.post("/apply/:jobId", verifyToken, applyJob);

// Get all applications of this student
router.get("/applications", verifyToken, getApplications);

// Skill Gap Analysis: Analyze gap for specific job
router.get("/skill-gap/:jobId", verifyToken, getSkillGapForJob);

// Skill Gap Analysis: Get personalized learning paths based on all jobs
router.get("/learning-paths", verifyToken, getLearningPaths);

export default router;
