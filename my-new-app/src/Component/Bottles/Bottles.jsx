import { useEffect, useState } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'
import Cart from "../cart/Cart";
import { addToLS, getStoredCart } from "../Utilities/localstorage";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetch('/bottles.json')  // Ensure 'bottle.json' is in the public folder
      .then(res => res.json())
      .then(data => setBottles(data))
      
  }, []);

  useEffect(() => {
    console.log(bottles.length);
    if(bottles.length>0){
      const storedCart = getStoredCart();
     let saveCart=[];
      for(const id of storedCart)  {
        console.log(id);
        const bottle = bottles.find(bottle=>bottle.id === id);
        if(bottle){
saveCart.push(bottle)
        }
      }
      setCart(saveCart);
    }
  }, [bottles]);
  

  const handleAddToCard=(bottle)=>{
   const  newCart=[...cart,bottle]
   setCart(newCart);
   addToLS(bottle.id)
}

  return (
    <div>
      <h2>Bottles Here : {bottles.length}</h2>
          <Cart cart={cart}>
          </Cart>
      
      <div className="Bottle-container">
      {
        bottles.map(bottle=><Bottle bottle={bottle} handleAddToCard={ handleAddToCard} key={bottle.id}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;