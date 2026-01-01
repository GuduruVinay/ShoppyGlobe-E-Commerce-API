import { fetchProducts, getProduct } from "../controllers/product.controller.js";


export default function productRoutes(app) {
    // Fetch a list of products
    app.get('/products', fetchProducts);

    // Fetch details of a single product by its ID
    app.get('/products/:id', getProduct);
}