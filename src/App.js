import React,{useState,useEffect} from 'react';
// import Admin from './components/admin';
// import FurnitureDisplay from './components/products';
// // import Navbar from './components/Navbar';
// import ShopPage from './components/ShopPage';
// import HomePage from './components/homepage';
// import AboutNav from './AboutNav';
// import Interior from './components/Interior';
// import Cart from './components/Cart';

import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import Mainpage from './Mainpage';
import ItemDetails from './ItemDetails';
import Admin from './components/admin';
import ShopPage from './components/ShopPage';
const App = ()=>{
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Mainpage />} />
             <Route path="/:category/:id"  element={<ItemDetails />} />
             {/* <Route path="/shop" element={<ShopPage/>}/> */}
             <Route path="/admin" element={<Admin />} />

           </Routes>
         </Router>
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
