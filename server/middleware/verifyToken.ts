import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET!;

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = req.headers?.authorization;

  if (!token) {
    res.status(401).send("Unauthorized");
  } else {
    jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
      if (err) {
        res.status(401).send("Unauthorized");
      }
      req.body.user = decoded;
      next();
    });
  }
}
