import React from 'react'

function Product({ name, price, handleDelete, index }) {
    return (
        <div onClick={() => handleDelete(index)}>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    )
}

export default Product
