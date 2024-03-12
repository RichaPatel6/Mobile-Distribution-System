// cartUtils.js
export const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  export const addToCart = (product) => {
    const cart = getCart();
    const isProductInCart = cart.find((item) => item.id === product.id);
    if (!isProductInCart) {
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  
  export const clearCart = () => {
    localStorage.removeItem("cart");
  };
  