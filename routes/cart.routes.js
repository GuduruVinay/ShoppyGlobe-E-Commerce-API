import { Router } from "express";
import { addProduct, removeProduct, updateProductQuantity } from "../controllers/cart.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = Router();

// POST /cart - Add item
router.post('/', auth, addProduct);

// PUT /cart/:id - Update quantity (Using Product ID as param)
router.put('/:id', auth, updateProductQuantity);

// DELETE /cart/:id - Remove item (Using Product ID as param)
router.delete('/:id', auth, removeProduct);

export default router;