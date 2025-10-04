import express from "express";
import cors from "cors";
import taskRoute from "./routes/taskRoute";

const app = express();

app.use(cors());
app.use(express.json());

// all the routes is defined here

app.use("/api", taskRoute);

export default app;
