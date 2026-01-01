import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.model.js"

// Register new User
export async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User resgistered successfully' });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

// Login existing User
export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            res.status(400).json({ message: 'Invalid Credentials' });
        }

        // Generate Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, userId: user._id });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}