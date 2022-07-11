import { Router } from 'express'
import { getProductAll, getProductById, createProduct, updateProduct, deleteProduct } from "../controller/product.controller.js"
const routesAdmin = Router()
let x = ""
let y = ""
let administradro = true
let errorMessage = { error: -1, description: `ruta ${x} metodo ${y} no autorizadas` }

routesAdmin.get("/:id?", async (req, res) => {
    const { id } = req.params && req.params
    const arrayProductos = id ? await getProductById(id) : await getProductAll()
    return res.json(arrayProductos)
})
routesAdmin.post("/", (req, res) => {
    x = "/"
    y = "post"
    if (administradro) {        
        createProduct(req.body)
        return res.json({message:"Agregado"})
    } else return res.json(errorMessage)
})
routesAdmin.put("/:id", (req, res) => {
    x = "/:id"
    y = "put"
    if (administradro) {
    updateProduct(req.params.id, {...req.body, timestamp: new Date().toLocaleDateString()})
    return res.json({message:"Updated"})
    }else res.json(errorMessage)
})
routesAdmin.delete("/:id", (req, res) => {
    x = "/:id"
    y = "delte"
    if (administradro) {
    deleteProduct(req.params.id)
    return res.json({message:"deleted"})
    }else res.json(errorMessage)
})

export default routesAdmin