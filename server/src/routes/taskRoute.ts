import express from "express";
import {
  createPost,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from "../controllers/taskController";

const router = express.Router();

// create a task
router.post("/tasks", createPost);

// get all tasks
router.get("/tasks", getAllTasks);

// get single task
router.get("/tasks/:id", getTaskById);

// update task
router.put("/tasks/:id", updateTaskById);

// delete task
router.delete("/tasks/:id", deleteTaskById);

export default router;
