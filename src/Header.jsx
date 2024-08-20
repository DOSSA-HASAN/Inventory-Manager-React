import React from 'react'

function Header({ handleToggleMode }) {
    return (
        <div className='header'>
            <h1>Product Inventory</h1>
            <button onClick={ () => handleToggleMode((prev) => !prev)}>Toggle Mode</button>
        </div>
    )
}

export default Header
