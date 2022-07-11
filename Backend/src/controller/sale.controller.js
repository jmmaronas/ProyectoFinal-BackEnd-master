import Sale from '../model/Sale.js'

export const getSaleAll = async () => {
    return await Sale.find()
}

export const getSaleById = async (id) => {
    return await Sale.findById(id)
}

export const getCartSaleAll = async (id) => {
    return await Sale.findById()
}

export const getCartSaleById = async (id) => {
    return await Sale.findById(id)
}

export const createCart = async (objeto) => {
    const sale = new Sale(objeto)
    return await sale.save()
}

export const addSale = async (saleId, objeto) => {    
    const sale = await Sale.findById(saleId)
    let indice = sale.compra.findIndex(e => e.productId == objeto.productId)
    indice === -1 ? sale.compra.push(objeto) : sale.compra[indice].qty = objeto.qty
    sale.save()
    return sale
}

export const updateSale = async (cartId, productId, newObject) => {    //no funciona
    const sale = await Sale.findById(cartId)
    const index = sale.compra.findIndex(e => e.id === productId)
    sale.compra[index] = { ...newObject }
    sale.save()
    return (sale)
}

export const deleteSale = async (id) => {
    return await Sale.findByIdAndDelete(id)
}

export const deleteProductCart = async (cartId, productId) => {
    const sale = await Sale.findById(cartId)
    const newObject = sale.compra.filter(e => e.productId !== productId)
    return await Sale.findByIdAndUpdate(cartId, { compra: newObject })
}

