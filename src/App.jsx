import React from "react"
import Header from "../public/components/Header"
import Cart from "../public/pages/Cart"
import Photos from "../public/pages/Photos"
import { Route, Routes} from "react-router-dom"


function App() {

  return (
    <div>
      <Header />
      <Routes>
            <Route index element={<Photos />} />
            <Route path="Photos" element={<Photos />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>
          
    </div>
  )
}

export default App
