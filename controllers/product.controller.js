import ProductModel from "../models/Product.model.js";

// Fetch a list of products
export async function fetchProducts(req, res) {
    try {
        const data = await ProductModel.find({});
        if(!data) {
            return res.status(404).json({ "message": "Products not found" })
        }
        return res.status(200).json(data);
    }
    catch(err) {
        return res.status(500).json({ "errorMessage": err });
    }
}


// Fetch details of a single product by its ID
export async function getProduct(req, res) {
    try {
        const idd = req.params.id;

        const data = await ProductModel.findOne({ id: idd });
        if(!data) {
            return res.status(404).json({ "message": "Product not found" })
        }
        return res.status(200).json(data);
    }
    catch(err) {
        return res.status(500).json({ "errorMessage": err });
    }
}