// Imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Route Imports
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => { console.log("MongoDB CONNECTED") })
.catch((err) => { console.error("MongoDB Connection Error:", err) });

// Routes
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});


// Local Host at PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server RUNNING ON PORT: ${PORT}`);
});