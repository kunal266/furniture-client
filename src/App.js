import React,{createContext,useState} from 'react';


import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Admin from './components/admin';

export const CartContext = createContext();
const App = ()=>{
  const [cart, setCart] = useState({});


  const addToCart = (product,action) => {
    
    // const updatedCart = { ...cart };
    // console.log(updatedCart)
    if (cart[product.id]){
    if (cart[product.id][0]>=0) {
    // console.log(cart,'product exist')

    const { [product.id]: deletedKey, ...newObject } = cart;
      if (action==='add'){
      // If the product is already in the cart, increase the count by 1
      setCart({...newObject,[product.id]: [deletedKey[0]+1,deletedKey[1]]})
      // console.log(deletedKey,'delted')
    }
      else if (action==='remove'){
        if (cart[product.id][0]===0){
        }
        else{
      setCart({...newObject,[product.id]: [deletedKey[0]-1,deletedKey[1]]})

      }
      
      }
      // localStorage.setItem(cart, JSON.stringify(cart));
    }} else {
      // If the product is not in the cart, add it with count 1
      if (action==='add'){
        setCart({...cart,[product.id]:[1,product]})
    }
      // localStorage.setItem(cart, JSON.stringify(cart));
    }
      return cart;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
    <Router>
      <Routes>
            <Route path="/" element={<Mainpage />} />
             {/* <Route path="/:category/:id"  element={<ItemDetails />} /> */}
             {/* <Route path="/shop" element={<ShopPage/>}/> */}
             <Route path="/admin" element={<Admin />} />
             {/* <Route path="/" element={<Modal />} /> */}
           </Routes>
         </Router>
         
         </CartContext.Provider>
  )
}
export default App;
