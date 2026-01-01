import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductModel from "./models/Product.model.js";

dotenv.config();

// Dummy Data
const products = [
    {
        name: "Wireless Bluetooth Headphones",
        price: 49.99,
        description: "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
        stock: 50
    },
    {
        name: "Smartphone 12 Pro",
        price: 999.00,
        description: "Latest 5G smartphone with A14 Bionic chip and pro camera system.",
        stock: 20
    },
    {
        name: "Gaming Laptop X",
        price: 1250.50,
        description: "High-performance laptop with 16GB RAM, RTX 3060, and 1TB SSD.",
        stock: 10
    },
    {
        name: "Mechanical Keyboard",
        price: 85.00,
        description: "RGB backlit mechanical keyboard with blue switches.",
        stock: 35
    },
    {
        name: "Smartwatch Series 5",
        price: 199.99,
        description: "Water-resistant smartwatch with heart rate monitor and GPS.",
        stock: 25
    },
    {
        name: "4K Monitor 27-inch",
        price: 320.00,
        description: "IPS display with 144Hz refresh rate for smooth gaming.",
        stock: 15
    },
    {
        name: "USB-C Hub",
        price: 25.99,
        description: "7-in-1 USB-C hub with HDMI, SD card reader, and USB 3.0 ports.",
        stock: 100
    },
    {
        name: "Ergonomic Office Chair",
        price: 150.00,
        description: "Comfortable mesh chair with lumbar support and adjustable height.",
        stock: 8
    }
];

// Connect and Seed
const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for Seeding...');

        // Clear existing data
        await ProductModel.deleteMany({});
        console.log('Old products removed.')
        
        // Insert new data
        await ProductModel.insertMany(products);
        console.log('Dummy products added successfully!');

        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();