import React from 'react'

function Search({ handleSearch }) {
    return (
        <div className='search'>
            <input type="text" placeholder='Search products...' onChange={(event) => handleSearch(event.target.value)}/>
        </div>
    )
}

export default Search
