
import { AddCart } from './addcart'


import './header.css'
import { Link } from 'react-router-dom';
export let Header =()=>{
 
  return<>
    <header className="navbar">
    <div className="logo">ShopEase</div>

    <nav className="nav-links">
      <Link to="/">Home</Link>
      <a href="#">Shop</a>
      <a href="#">Deals</a>
      <Link to="/contact">Contact</Link>
    </nav>

   <AddCart></AddCart>
  </header>

  </>
}