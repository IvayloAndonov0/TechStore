import jwt from "jsonwebtoken";
import "dotenv/config";
const secret = process.env.JWT_SECRET;
export const authMiddleware = ( req, res, next ) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  const token = authHeader;
  
  

  if (!token) return res.status(401).json({ error: "Access Denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ error: "Invalid Token" });
      req.user = user;
      next();
  });
};


export const isAuth = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.redirect('/auth/login');
  } 

  next();
}