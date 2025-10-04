import prisma from "../config/prisma";
import catchAsyncError from "../middleware/catchAsyncError";
import { Request, Response, NextFunction } from "express";

// create a task
export const createPost = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, color } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await prisma.task.create({
      data: {
        title,
        color,
      },
    });

    return res.status(201).json({
      message: "Task created successfully",
      task,
    });
  }
);

// get all tasks
export const getAllTasks = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json({
      message: "Tasks fetched successfully",
      tasks,
    });
  }
);

// get single task
export const getTaskById = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Task id is required" });
    }
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({
      message: "Task fetched successfully",
      task,
    });
  }
);

// update a task
export const updateTaskById = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Task id is required" });
    }

    const { title, color, completed } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const existingTask = await prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updateTask = await prisma.task.update({
      where: { id },
      data: {
        title,
        color,
        completed,
      },
    });

    return res.status(200).json({
      message: "Task updated successfully",
      updateTask,
    });
  }
);

// detelte a task
export const deleteTaskById = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Task id is required" });
    }

    const existingTask = await prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    await prisma.task.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Task deleted successfully",
    });
  }
);
