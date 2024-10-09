import { Router } from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.controller.js";
const route=Router()

route.post('/',createProduct)
route.delete('/:id',deleteProduct)
route.get('/',getProduct)
route.put('/:id',updateProduct)
export default route