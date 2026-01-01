import { Router } from "express";
import { getAllProducts, getProduct } from "../controllers/product.controller.js";

const router = Router();

// GET /products - List all products
router.get('/', getAllProducts);

// GET /products/:id - Single product details
router.get('/:id', getProduct);

export default router;