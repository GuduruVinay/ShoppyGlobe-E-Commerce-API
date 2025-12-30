import ProductModel from "../models/Product.model.js";

// Fetch a list of products
export async function fetchProducts(req, res) {
    try {
        const products = await ProductModel.find({});
        if(!products) {
            return res.status(404).json({ "message": "Products not found" })
        }
        return res.status(200).json(products);
    }
    catch(err) {
        return res.status(500).json({ "errorMessage": err });
    }
}


// Fetch details of a single product by its ID
export async function getProduct(req, res) {
    try {
        const idd = req.params.id;

        const product = await ProductModel.findOne({ _id: idd });
        if(!product) {
            return res.status(404).json({ "message": "Product not found" })
        }
        return res.status(200).json(product);
    }
    catch(err) {
        return res.status(500).json({ "errorMessage": err });
    }
}

// Add a product to the shopping cart
export async function addProduct(req, res) {
    try {
        const { title, price, description, quantity} = req.body;
        const newProduct = await CartModel.create({ title, price, description, quantity });
        return res.status(201).json({ "newProduct": newProduct });
    }
    catch(err) {
        return res.status(500).json({ "errorMessage": err });
    }
}

// Update the quantity of a product in the cart
export async function updateProductQuantity(req, res) {
    try {
        const idd = req.params.id;
        const updateProductQuantity = await CartModel.findByIdAndUpdate(idd, req.body, {new: true});
        return res.status(200).json({ "updatedProductQuantity": updateProductQuantity });
    }
    catch(err) {
        return res.status(500).json({ "errorMessage": err });
    }
}

// Remove a product from the cart
export async function removeProduct(req, res) {
    try {
        const idd = req.params.id;
        const deletedProduct = await CartModel.findByIdAndDelete(idd);
        return res.status(200).json({ "deletedProduct": deletedProduct });
    }
    catch(err) {
        return res.status(500).json({ "errorMessage": err });
    }
}