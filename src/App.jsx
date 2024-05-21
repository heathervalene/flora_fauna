import Nav from './components/Nav'
import ProductList from "./components/ProductList"
import Product from './components/Product'
import { Routes,Route } from 'react-router-dom'

import './App.css'

function App() {


  return (
   <div>
    <header>
      <Nav />
    </header>
    <main>
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
   
    </main>
   </div>
  )
}

export default App
