import { pool } from "../config/db.js"

export const getProducts = async (req, res) => {
    try {
        const query = "SELECT * FROM product"
        const result = await pool.query(query)
        res.send(result[0])
    } catch (error) {
        res.send(error)
    }
}

export const getProduct = async (req, res) => {
    try {
        const pid = req.params.id
        const query = "SELECT * FROM product WHERE product_id = ?"
        const result = await pool.query(query, pid)

        if(result[0].length === 0) return res.status(404).send(["Product not found"])
        
        res.status(200).json({status: true, payload: result[0]})
    } catch (error) {
        res.send(error)
    }
}

export const createProduct = async (req, res) => {
    try {
        const {name, category_id, description, brand_id, model_height, model_wearing, care_instructions, about} = req.body
        const query = "INSERT INTO products (name, category_id, description, brand_id, model_height, model_wearing, care_instructions, about) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        const values = [name, category_id, description, brand_id, model_height, model_wearing, care_instructions, about]
        const result = await pool.query(query, values)
        res.status(200).json({status: true, payload: result})
    } catch (error) {
        res.send(error)
    }
}

export const updateProduct = async (req, res) => {}

export const deleteProduct = async (req, res) => {}
