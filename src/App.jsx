import React from "react"
import Header from "../public/components/Header"
import Cart from "../public/pages/Cart"
import Photos from "../public/pages/Photos"
import {Switch, Route} from "react-router-dom"


function App() {

  return (
    <div>
      <Header />
      <Switch>
          <Route>
            <Photos />
          </Route>
          <Route>
            <Cart />
          </Route>
      </Switch>
    </div>
  )
}

export default App
