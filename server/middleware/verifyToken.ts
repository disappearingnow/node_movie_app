import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET!;

function verifyToken(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers?.authorization;

  if (!token) {
    req.body.tokenPresent = "false";
    next();
  } else {
    jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
      if (err) {
        req.body.tokenPresent = "false";
        next();
      }
      req.body.user = decoded;
      next();
    });
  }
}
