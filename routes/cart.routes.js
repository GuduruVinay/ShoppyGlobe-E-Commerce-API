import { addProduct, removeProduct, updateProductQuantity } from "../controllers/cart.controller.js";

export default function cartRoutes(app) {
    // Add a product to the shopping cart
    app.post('/cart', addProduct);

    // Update the quantity of a product in the cart
    app.put('/cart/:id', updateProductQuantity);

    // Remove a product from the cart
    app.delete('/cart/:id', removeProduct);
}