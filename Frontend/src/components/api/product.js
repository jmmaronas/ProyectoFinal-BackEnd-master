export const getProducts=async ()=>{
    try{
        const data=await fetch('http://localhost:8080/api/productos/')
        const result=await data.json()
        return result
    }catch(err){
        console.error(err)
    }
}

export const createProduct=async (newProduct)=>{
    try{
        fetch(`http://localhost:8080/api/productos`, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }catch(err){
        console.error(err)
    }
}

export const deleteProduct= async (id)=>{
    try{
        await fetch(`http://localhost:8080/api/productos/${id}`,{
            method:"delete"
        })
    }catch(err){
        console.error(err)
    }
}

export const updateProducto=async (id, product)=>{
    try{
        await fetch(`http://localhost:8080/api/productos/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }catch(err){
        console.error(err)
    }
}