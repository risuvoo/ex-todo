import { Request, Response, NextFunction } from "express";

const catchAsyncError = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
export default catchAsyncError;
