import express, { json } from "express";
import morgan from "morgan";
import userRoutes from "./routes/user";
import cors from "cors";
const app = express();

app.set("port", process.env.PORT || 4001);

//Middlewares
app.use(morgan("dev"));
app.use(json());
app.use(cors());

//Routes
app.use("/api/users", userRoutes);

export default app;
