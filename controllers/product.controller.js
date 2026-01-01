import ProductModel from "../models/Product.model.js";

// Fetch a list of products
export async function getAllProducts(req, res) {
    try {
        const products = await ProductModel.find();
        if(!products) {
            return res.status(404).json({ message: "Products not found" })
        }
        return res.status(200).json(products);
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
}


// Fetch details of a single product by its ID
export async function getProduct(req, res) {
    try {
        const idd = req.params.id;
        const product = await ProductModel.findById(idd);
        if(!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        return res.status(200).json(product);
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
}