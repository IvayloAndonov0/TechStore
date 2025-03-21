import jwt from "jsonwebtoken";
import "dotenv/config";
import authService from "../services/authService.js";
const secret = process.env.JWT_SECRET;
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader;



  if (!token) {
    return res.status(401).json({ error: "Access Denied" })
  };
  if (authService.isTokenBlacklisted(token)) {
    return res.status(401).json({ message: "Token is invalidated" });
  };


  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid Token" });
    next();
  });
};