const getStoredCart = () => {
    try {
      const storedcartString = localStorage.getItem('cart');
      if (storedcartString) {
        return JSON.parse(storedcartString);
      }
    } catch (error) {
      console.error("Error parsing stored cart:", error);
    }
    return []; // Return an empty array if there's no data or parsing fails
  };
  
const savecartLS= cart =>{
    const cartStringfy = JSON.stringify(cart);
     localStorage.setItem('cart', cartStringfy)

}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    savecartLS(cart)
}
export {addToLS, getStoredCart}