import React,{createContext, useContext,useState,useEffect} from 'react';
// import Admin from './components/admin';
// import FurnitureDisplay from './components/products';
// // import Navbar from './components/Navbar';
// import ShopPage from './components/ShopPage';
// import HomePage from './components/homepage';
// import AboutNav from './AboutNav';
// import Interior from './components/Interior';
// import Cart from './components/Cart';

import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import ItemDetails from './components/ItemDetails';
import Admin from './components/admin';
import ShopPage from './components/ShopPage';
import Modal from './components/modal'

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



// import React from 'react';

// const ItemList = () => {
//   const items = [
//     { id: 1, name: 'Item 1', description: 'This is item 1' },
//     { id: 2, name: 'Item 2', description: 'This is item 2' },
//     { id: 3, name: 'Item 3', description: 'This is item 3' }
//   ];

//   return (
//     <div>
//       <h1>Item List</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//           <Link to={{ pathname: `/item/${item.id}`, state: { id: item.id } }}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ItemDetails = ({ match }) => {
//   const items = [
//     { id: 1, name: 'Item 1', description: 'This is item 1' },
//     { id: 2, name: 'Item 2', description: 'This is item 2' },
//     { id: 3, name: 'Item 3', description: 'This is item 3' }
//   ];
//   const { id } = useParams();
//   const itemId = parseInt(id, 10);
//   const item = items.find(item => item.id === itemId);
//   return (
//     <div>
//       <h2>Item Details</h2>
//       {item ? (
//         <div>
//           <h3>{item.name}</h3>
//           <p>{item.description}</p>
//         </div>
//       ) : (
//         <p>Item not found.</p>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ItemList />} />
//         <Route path="/item/:id" element={<ItemDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
