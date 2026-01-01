import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if(!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach user info (id) to request
        req.user = decoded;
        next();
    } catch(error) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};