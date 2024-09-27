import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRouter } from "./routes";
import users from "./fakeUserData";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Welcome");
});

app.post("/login", (req: Request, res: Response) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send("You need to provide a username and password");
  }

  const { username, password } = req.body;

  const doesUserExist = users.filter(
    (user) => user.username === username && user.password === password
  );

  if (doesUserExist.length === 0) {
    return res.status(400).send("User does not exist");
  }

  return res.status(200).send(`User ${username} does exist`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
