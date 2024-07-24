import { Router } from "express"
import { getBrands, getBrand, createBrand, updateBrand, deleteBrand } from "../controllers/brands.controller.js"

const router = Router()


router.get("/", getBrands)

router.get("/:id", getBrand)

router.post("/", createBrand)

router.put("/:id", updateBrand)

router.delete("/:id", deleteBrand)


export default router