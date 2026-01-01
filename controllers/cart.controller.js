import CartModel from "../models/Cart.model.js";
import ProductModel from "../models/Product.model.js";

// Add a product to the shopping cart
export async function addProduct(req, res) {
    try {
        const userIdd = req.user.id;
        const { productId, quantity } = req.body;
        const product = await ProductModel.findById(productId);
        if(!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        let cart = await CartModel.findOne({ userId: userIdd });
        if(cart) {
            const itemIndex = cart.items.findIndex(p => p.productId == productId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }
        } else {
            cart = new CartModel({
                userId: userIdd,
                items: [{ productId, quantity }]
            });
        }
        await cart.save();
        return res.status(201).json(cart);
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

// Update the quantity of a product in the cart
export async function updateProductQuantity(req, res) {
    try {
        const userIdd = req.user.id;
        const productId = req.params.id;
        const { quantity } = req.body;
        const cart = await CartModel.findOne({ userId: userIdd });
        if(!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const itemIndex = cart.items.findIndex(p => p.productId == productId);
        if(itemIndex > -1) {
            cart.items[itemIndex].quanity = quantity;
            await cart.save();
            res.status(200).json(cart);
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

// Remove a product from the cart
export async function removeProduct(req, res) {
    try {
        const userIdd = req.user.id;
        const productId = req.params.id;
        const cart = await CartModel.findOne({ userId: userIdd });
        if(!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        cart.items = cart.items.filter(item => item.productId != productId);
        await cart.save();
        res.status(200).json(cart);
    }
    catch(error) {
        return res.status(500).json({ error: error.message });
    }
}