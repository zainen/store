import { div } from 'prelude-ls'
import './header.css'
import cart from '../images/cart.png'
export default function Header () {
  return (
    <>
      <div className='header'>
        <h2>Super Awesome Store</h2>
        <div className='cart-div'>
          <p className='cart-title'>Your Cart</p>
          <img src={cart} alt='Cart' className='cart'/>
        </div>
      </div>
    </>
  )
}