'use client'

import Link from 'next/link'
import { useCartContext } from '../providers/ZustandProvider'

const CartButton = () => {
    const products = useCartContext((state) => state.products)
  return (
    <Link href={"/cart"}>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              Cart
              <span>{products.length}</span>
            </button>
     </Link>
  )
}

export default CartButton