import express from "express"
import productsRoutes from "./routes/products.routes.js"
import brandsRoutes from "./routes/brands.routes.js"
import productItemRoutes from "./routes/product_item.routes.js"

const app = express()
const port = 3000

//Format
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use("/api/products", productsRoutes)
app.use("/api/brands", brandsRoutes)
app.use("/api/product/item", productItemRoutes)


app.listen(port, () => {
    console.log(`Ejecutandose en http://localhost:${port}`);
})
