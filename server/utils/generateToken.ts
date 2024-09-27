import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const secret = process.env.JWT_SECRET!;

export default function generateToken(userId: number): string {
  return jwt.sign({ userId }, secret, { expiresIn: "1h" }); // Token expires in 1 hour
}
