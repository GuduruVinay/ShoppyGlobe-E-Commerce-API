import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a product name'],
        trim: true,
        maxlength: [100, 'Product name cannot exceed characters']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a product price'],
        min: [0, 'Price cannot be negative'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a product description'],
        maxlength: [1000, 'Description cannot exceed 1000 characters']
    },
    stockQuantity: {
        type: Number,
        required: [true, 'Please provide stock quantity'],
        min: [0, 'Stock quantity cannot be negative'],
        default: 0
    }
});

const ProductModel = mongoose.model('Products', productSchema);

export default ProductModel;