import { addProduct, fetchProducts, getProduct, removeProduct, updateProductQuantity } from "../controllers/product.controller.js";


export default function productRoute(app) {
    // Fetch a list of products
    app.get('/products', fetchProducts);

    // Fetch details of a single product by its ID
    app.get('/products/:id', getProduct);

    // Add a product to the shopping cart
    app.post('/cart', addProduct);

    // Update the quantity of a product in the cart
    app.put('/cart/:id', updateProductQuantity);

    // Remove a product from the cart
    app.delete('/cart/:id', removeProduct);
}