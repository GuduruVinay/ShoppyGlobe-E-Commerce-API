import { Router } from "express";
import { addProduct, removeProduct, updateProductQuantity } from "../controllers/cart.controller.js";

const router = Router();

// POST /cart - Add item
router.post('/', addProduct);

// PUT /cart/:id - Update quantity (Using Product ID as param)
router.put('/:id', updateProductQuantity);

// DELETE /cart/:id - Remove item (Using Product ID as param)
router.delete('/:id', removeProduct);


export default router;