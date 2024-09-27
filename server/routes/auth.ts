import express, { Router, Request, Response } from "express";
import verifyToken from "../middleware/verifyToken";

const authRouter: Router = express.Router();
authRouter.use(verifyToken);

authRouter.get("/", (req: Request, res: Response) => {
  res.send("Birds home page");
});
authRouter.get("/about", (req: Request, res: Response) => {
  res.send("About birds");
});

export default authRouter;
