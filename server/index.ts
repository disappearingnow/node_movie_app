import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome");
});

app.post("/login", (req: Request, res: Response) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
