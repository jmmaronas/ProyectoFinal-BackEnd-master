import { useProductContext } from "../Context/ProductContext.js"
import DeleteCartItem from "./DeleteCartItem.js"

export default function CartItem({product:{productId, qty}, quitar}) {
    const {products}=useProductContext()    
    const product=products.find(e=>e._id===productId)
    return (
        <li className="flex py-3">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={product.urlImage}
                    alt={product.urlImage}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="ml-2 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className="ml-2">$ {product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {qty}</p>

                    <div className="flex">
                        <DeleteCartItem itemId={productId} quitar={quitar}/>
                    </div>
                </div>
            </div>
        </li>
    )
}