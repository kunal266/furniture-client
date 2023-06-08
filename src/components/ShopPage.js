import React,{useEffect,useState,useContext} from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth
  // , signInWithEmailAndPassword 
} from 'firebase/auth';
import { getFirestore, collection
  // , onSnapshot, addDoc, deleteDoc, doc
  ,
  getDocs } from 'firebase/firestore';
import {getStorage
  // ,ref, getDownloadURL, uploadBytesResumable
} from 'firebase/storage';
// import {Link} from 'react-router-dom';
// import Modal from './modal';
import { CartContext } from '../App';
// import Cart from './Cart';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const cardStyle = {
  width: '282px',
  backgroundColor: '#f2f2f2',
  transition: 'transform 0.3s ease',
  transformOrigin: 'center',
  '&:hover': {
    transform: 'scale(1.4)',
  },
  cursor: 'pointer'
};
const ShopPage = () => {
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [traits, setTraits] = useState('');
  // const [category, setCategory] = useState('');
  // const [image, setImage] = useState(null);
  const [bedroomProducts, setBedroomProducts] = useState([]);
  const [sofaProducts, setSofaProducts] = useState([]);
  const [diningTableProducts, setDiningTableProducts] = useState([]);
  const [centerTableProducts, setcenterTableProducts] = useState([]);
  const [cupboardProducts, setcupboardProducts] = useState([]);
  const [couchesProducts, setcouchesProducts] = useState([]);
  const [dressingTableProducts, setdressingTableProducts] = useState([]);
  const [sideTableProducts, setsideTableProducts] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('');
  const [currentList,setCurrentList] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [cartItems, setCartItems] = useState(0);
  // const [cupboardProduct,setcupboardProduct] = useState([]);
  const { cart, addToCart  } = useContext(CartContext);


  // console.log(process.env.REACT_APP_FIREBASECONFIG)

 
  const fetchProducts = async (element) => {
    try {
      const querySnapshot = await getDocs(collection(db,element));
      const productsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if (element==='sofa'){

        setCurrentList(productsData)
      }
      // console.log(productsData)
      
      return productsData;
      // // console.log(querySnapshot)
      // const productsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(bedroomProducts)
    } catch (error) {
      console.log(error);
    }
  };
  
      const fetchfirebase = async ()=>{
        
        setSofaProducts(await fetchProducts('sofa'))
        // console.log(await fetchProducts('cupboard'))
        setcupboardProducts(await fetchProducts('cupboard'))
        setBedroomProducts(await fetchProducts('bed'))
        setDiningTableProducts(await fetchProducts('diningTableChairs'))
        setcenterTableProducts(await fetchProducts('centerTable'))
        setcouchesProducts(await fetchProducts('couches'))
        setdressingTableProducts(await fetchProducts('dressingtable'))
        setsideTableProducts(await fetchProducts('sidetable'))
      }
  
  useEffect(() => {
    fetchfirebase()
    console.log(cart)
  }, []);


  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.6em',
    width: '2em',
    height: '2em',
    minWidth: '1em',
    border: '1px solid black',
    color: 'black',
    cursor: 'pointer',
    borderRadius: '8%',
  };

  const spanStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.7em',
    margin: '0 2px',
    // backgroundColor: 'lightgrey',
    border: '1px solid black',
    color: 'black',
    width: '2em',
    height: '2em',
    borderRadius: '8%',
    // textAlign: 'center',
  };
  const filters =(prodlist,fil) =>{
    // console.log("filters")
  const filteredList = prodlist.filter(product =>
    product.selectedSubCategory === fil
  );
  // console.log(filteredList)
  return filteredList;
  }
  const handleAddToCart = (product,action) => {
    // console.log(product,action)
    addToCart(product,action)
  };
  const categoryList = ['sofa','beds','cupboard','centerTable','diningTableChairs','couches','sidetable','dressingtable']
  const sofaList = ['sofacumbed','sofawithlouger','sofa311','sofa32']
  const bedlist = ['kingsize','queensize']
  const cupboardlist = ['backpaintedglass','digitalglass','laminatefinish','walltowall']
  const centertablelist = ['marbletop','woodentop','onextable','11','glasstop']
  const diningtablelist = ['marbletopwoodenbase','marbletopsteelbase','glasstopsteelbase','11','woodendining']
  return (
    <div className=" w-100" >
      <div className="row">
        <div className="col-md-2 px-5 " style={{backgroundColor:'#f2f2f2'}}>
          <a href='/' className='row mt-2 px-2 fw-bold' onClick={()=>setCurrentList(sofaProducts)} style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Sofa</a>
          {sofaList.map((element,index)=>{
            return (
          <a href='/' className='row px-4 ' onClick={()=>setCurrentList(filters(sofaProducts,element))}  key = {index} style={{ color: 'black',cursor: 'pointer' }}>{" "}{element} </a>

            )
          })}
          <a href='/' className='row mt-2 px-2 fw-bold' onClick={()=>setCurrentList(bedroomProducts)} style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Beds</a>
          {bedlist.map((element,index)=>{
            return (
          <a href='/' className='row px-4 ' onClick={()=>setCurrentList(filters(bedroomProducts,element))}  key = {index} style={{ color: 'black',cursor: 'pointer' }}>{" "}{element} </a>

            )
          })}
          <a href='/' className='row mt-2 px-2 fw-bold' onClick={()=>setCurrentList(diningTableProducts)} style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Dining Tables</a>
          {diningtablelist.map((element,index)=>{
            return (
          <a href='/' className='row px-4 ' onClick={()=>setCurrentList(filters(diningTableProducts,element))}  key = {index} style={{ color: 'black',cursor: 'pointer' }}>{" "}{element} </a>

            )
          })}
          <a href='/' className='row mt-2 px-2 fw-bold' onClick={()=>setCurrentList(centerTableProducts)} style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Center Table</a>
          {centertablelist.map((element,index)=>{
            return (
          <a href='/' className='row px-4 ' onClick={()=>setCurrentList(filters(centerTableProducts,element))}  key = {index} style={{ color: 'black',cursor: 'pointer' }}>{" "}{element} </a>

            )
          })}
          <a href='/' className='row mt-2 px-2 fw-bold' onClick={()=>setCurrentList(cupboardProducts)} style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Cupboards</a>
          {cupboardlist.map((element,index)=>{
            return (
          <a href='/' className='row px-4 ' onClick={()=>setCurrentList(filters(cupboardProducts,element))}  key = {index} style={{ color: 'black',cursor: 'pointer' }}>{" "}{element} </a>

            )
          })}
          <a href='/' className='row mt-3 px-2 fw-bold' onClick={()=>setCurrentList(couchesProducts)} style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Couches</a>
          <a href='/' className='row mt-3 px-2 fw-bold' onClick={()=>setCurrentList(sideTableProducts)} style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Side Tables</a>
          <a href='/' className='row mt-3 px-2 fw-bold' onClick={()=>setCurrentList(dressingTableProducts)} style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Dressing Tables</a>
        </div>
        <div className="col-lg-10">
          <div className="row row-cols-1 row-cols-md-5 pt-2" >
            {currentList.map((product, index) => (
              <div className="col" key={index}>
                {/* {console.log(product)} */}
                {/* <Link to={`/${product.selectedCategory}/${product.id}`} className="card-link" style={{ color: 'black' }} target="_blank"  > */}
                <div className="card " style={cardStyle}>
                    <img
                      src={product.urll}
                      alt={product.name}
                      className="card-img-top"
                      style={{ objectFit: "cover", 
                      width: "280px", height: "280px"
                     }}
                    />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="card-text">Price: {product.price}</div>
                    
                    <div className="card-text">Traits: {product.customization}</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button onClick={()=>handleAddToCart(product,'remove')} style={buttonStyle}>-</button>
                        <span style={spanStyle}>{cart[product.id]?cart[product.id][0]:0}</span>
                      <button onClick={()=>handleAddToCart(product,'add')} style={buttonStyle}>+</button>
                    </div>
                    {/* <button
                  type="button"
                  onClick={() => handleDeleteProduct(product.id, product.selectedCategory)}
                  className="btn btn-danger"
                  >
                  Delete
                </button> */}
                  </div>
                </div>
                {/* </Link> */}
              </div>
            ))}
          </div>
      </div>
        {/* <div className="col-lg-2  pr-5 px-5 text-end"  style={{backgroundColor:'#f2f2f2',height:'100vh'}}>Column 3</div> */}
      </div>
    </div>
  );
};

export default ShopPage;
