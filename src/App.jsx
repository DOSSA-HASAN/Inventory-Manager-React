import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Search from './Search'
import ProductList from './ProductList'

function App() {

  //an array to store list of products
  const [products, setProducts] = useState([])

  //string to store product name
  const [productName, setProductName] = useState('')

  //string for product price
  const [productPrice, setProductPrice] = useState('')

  //to store text for searching
  const [searchText, setSearchText] = useState('')

  //filters products and displays them based on the searchText
  const [filteredProducts, setFilteredProducts] = useState([])

  //boolean to toggle darkmode
  const [darkMode, setDarkMode] = useState(false)

  //useeffect: automatically updates the filteredProducts based on the searchText
  useEffect(() => {
    setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase())))
  }, [searchText, products])

  const handleAddProduct = () => {
    if(productName && productPrice){
      const newProduct = {
        name: productName,
        price: productPrice
      }

      const newProducts = [...products, newProduct];
      setProducts(newProducts)
      setProductName('')
      setProductPrice('')
    }
  }

  const handleDeleteProduct = (itemId) => {
    const newProducts = products.filter((_, id) => id !== itemId);
    setProducts(newProducts)
  }




  return (
    <>
      <div className={`${darkMode ? 'dark-mode' : ''}`}>
        <Header handleToggleMode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} placeholder='Enter product name' />

        <input type="number" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />

        <button onClick={handleAddProduct}>Add product</button>
        
        <ProductList products={filteredProducts} handleDelete={handleDeleteProduct}/>
      </div>
    </>
  )
}

export default App
