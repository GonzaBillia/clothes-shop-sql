import { Router } from "express";

import { getProductItem, getProductItems, createProductItem, updateProductItem, deleteProductItem } from "../controllers/product_item.controller.js";


const router = Router()


router.get("/:id", getProductItem)

router.get("/", getProductItems)

router.post("/", createProductItem)

router.put("/:id", updateProductItem)

router.delete("/:id", deleteProductItem)


export default router