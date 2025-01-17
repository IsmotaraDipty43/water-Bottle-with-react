import PropTypes from 'prop-types';
import './cart.css'
const Cart = ({cart}) => {
    return (
        <div>
<h3>Cart:{cart.length}</h3>
<div className='cart-container'>
    {cart.map(bottle=><img src={bottle.img} key={bottle.id}></img>)}
</div>
        </div>
    );
};

Cart.propTypes ={
    cart:PropTypes.array.isRequired
}
export default Cart;