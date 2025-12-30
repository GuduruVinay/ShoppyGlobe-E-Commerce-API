import { fetchProducts } from "../controllers/product.controller.js";


export default function productRoute(app) {
    // Fetch a list of products
    app.get('/products', fetchProducts);
}