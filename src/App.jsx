
import { Cartlist } from "./components/cartList"
import { Contact } from "./components/contact"
import { Header } from "./components/header"
import { MyProfile } from "./components/myprofile"

import { Product } from "./components/product"

import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
  

<BrowserRouter>
  <Header></Header>
<Routes>
  <Route path="/" element={<Product />}></Route>
  <Route path="/cart" element={<Cartlist></Cartlist>}></Route>
  <Route path="/contact" element={<Contact></Contact>}></Route>
  <Route path="/profile" element={<MyProfile></MyProfile>}></Route>
</Routes>
</BrowserRouter>


    </>
  )
}

export default App
