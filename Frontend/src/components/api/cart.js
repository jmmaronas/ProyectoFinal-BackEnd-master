export const createCart = async () => {
    try {
        const data = await fetch(`http://localhost:8080/api/carrito`, {
            method: "POST",
            body: JSON.stringify({ compra: [] }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const { id } = await data.json()
        return id
    } catch (err) {
        console.error(err)
    }
}

export const updateCart = async (carritoId, newProduct) => {
    try {
        await fetch(`http://localhost:8080/api/carrito/${carritoId}/productos`, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (err) {
        console.error(err)
    }
}

export const deleteCart=async (carritoId)=>{
    try{
        await fetch(`http://localhost:8080/api/carrito/${carritoId}`, {
                method: "delete"
            })
    }catch(err){
        console.error(err)
    }
}

export const delProductToCart=async (carritoId, id)=>{
    try{
        await fetch(`http://localhost:8080/api/carrito/${carritoId}/productos/${id}`, {//update
        method: "DELETE"
    })
    }catch(err){
        console.error(err)
    }
}