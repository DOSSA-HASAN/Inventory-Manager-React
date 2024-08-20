import React from 'react'
import Product from './Product'

function ProductList({products, handleDelete}) {
    return (
        <div className='product-list'>
            {products.map((product, index) => (
                <Product key={index} name={product.name} price={product.price} handleDelete={handleDelete} index={index}/>
            ))}
        </div>
    )
}

export default ProductList
