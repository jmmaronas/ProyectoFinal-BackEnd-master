import express from "express"
import cors from "cors"
import routesAdmin from "./src/routes/admin.js"
import routesUsers from "./src/routes/users.js"
import connectDB from "./src/db.js"
import { dirname, join } from "path"
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 8080
let administrador = false

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(__dirname, "../Frontend/build")))
app.use(cors())

connectDB()

app.get("/", (req, res) => {
    res.sendFile("index.html")
})
app.use("/api/productos", routesAdmin)
app.use("/api/carrito", routesUsers)
app.use("/*", (req, res) => {
    let x = req.url
    let y = req.method
    res.json({ error: -2, description: `ruta ${x} metodo ${y} no implementada` })
})

const server = app.listen(PORT, () => {
    console.log(`Server on port: ${server.address().port}`)
})
server.on("error", (err) => { console.error(err) })