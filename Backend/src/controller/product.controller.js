import Product from '../model/Product.js'

export const getProductAll=async ()=>{
    return await Product.find()
}

export const getProductById=async (id)=>{    
    return await Product.findById(id)
}

export const createProduct=async (objeto)=>{
    const product= new Product(objeto)
    return await product.save()
}

export const updateProduct=async (id, newObject)=>{    
    return await Product.findByIdAndUpdate(id, newObject)
}

export const deleteProduct= async (id)=>{
    return await Product.findByIdAndDelete(id)
}

