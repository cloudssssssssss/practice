import jwt from "jsonwebtoken";

const SECRET_KEY = "my_super_secret_key";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(403).send("Access denied. Please login.");

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send("Invalid or expired token.");
    }
};
