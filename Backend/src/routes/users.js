import { Router } from 'express'
import { getCartSaleAll, getCartSaleById, getSaleAll, getSaleById, createCart, addSale, updateSale, deleteSale, deleteProductCart } from "../controller/sale.controller.js"
const routesUsers = Router()
let x = ""
let y = ""

routesUsers.get("/", async (req,res)=>{
    const sales= await getSaleAll()
    return res.json(sales)
})

routesUsers.get("/:id/productos", async (req, res) => {
    const cart = await getCartSaleById(req.params.id)
    return res.json(cart)
})
routesUsers.post("/", async (req, res) => {    
    const {_id} = await createCart(req.body)
    console.log(_id)
    return res.json({ id:_id })
})
routesUsers.post("/:id/productos/", async (req, res) => {    
    const cartId = req.params.id
    //const {id, qty}= req.body
    //let product =await productos.getById(id)
    //carrito.addToCart(cartId, {...product, qty})
    
    addSale(cartId, req.body)
    return res.json({ message: "producto agregado la carrito" })
})
routesUsers.delete("/:id", (req, res) => {
    deleteSale(req.params.id)
    return res.json({ message: "cart deleted" })
})
routesUsers.delete("/:id/productos/:id_prod", (req, res) => {
    const { id, id_prod } = req.params
    deleteProductCart(id, id_prod)
    return res.json({ message: "producto elimando del carrito" })
})

export default routesUsers