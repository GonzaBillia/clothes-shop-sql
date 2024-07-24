import { pool } from "../config/db.js"


export const getBrands = async (req, res) => {
    try {
        const query = "SELECT * FROM brand"
        const result = await pool.query(query)
        res.send(result[0])
    } catch (error) {
        res.send(error)
    }
}


export const getBrand = async (req, res) => {
    try {
        const bid = req.params.id
        const query = "SELECT * FROM brand WHERE brand_id = ?"
        const result = await pool.query(query, bid)

        if(result[0].length === 0) return res.status(404).send(["Brand not found"])
        
        res.status(200).json({status: true, payload: result[0]})
    } catch (error) {
        res.send(error)
    }
}


export const createBrand = async (req, res) => {
    try {
        const {name, description} = req.body
        const query = "INSERT INTO brand (name, description) VALUES (?,?)"
        const values = [name, description]
        const result = await pool.query(query, values)
        res.status(200).json({status: true, payload: result})
    } catch (error) {
        res.send(error)
    }
}


export const updateBrand = async (req, res) => {}

export const deleteBrand = async (req, res) => {}