import { pool } from "../config/db.js"


export const getProductItem = async (req, res) => {
    try {
        const pid = req.params.id
        const query = "SELECT * FROM product_item WHERE product_item_id = ?"
        const result = await pool.query(query, pid)
        res.send(result[0])
    } catch (error) {
        res.send(error)
    }
}

export const getProductItems = async (req, res) => {
    try {
        const query = "SELECT * FROM product_item"
        const result = await pool.query(query)
        res.send(result[0])
    } catch (error) {
        res.send(error)
    }
}

export const createProductItem = async (req, res) => {}

export const updateProductItem = async (req, res) => {}

export const deleteProductItem = async (req, res) => {}

