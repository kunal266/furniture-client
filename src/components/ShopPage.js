import React,{useEffect,useState} from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc,getDocs } from 'firebase/firestore';
import {getStorage,ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCLMsu-6pXKEVV34-o7WCIwNqc-jZUUSIc",
  authDomain: "furniture-3a7d0.firebaseapp.com",
  projectId: "furniture-3a7d0",
  storageBucket: "furniture-3a7d0.appspot.com",
  messagingSenderId: "70034942573",
  appId: "1:70034942573:web:b16d104668b2aa973fad64"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const ShopPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [traits, setTraits] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [bedroomProducts, setBedroomProducts] = useState([]);
  const [sofaProducts, setSofaProducts] = useState([]);
  const [diningTableProducts, setDiningTableProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentList,setCurrentList] = useState(bedroomProducts);
  const fetchProducts = async () => {
    try {
      // Fetch products from Firestore and listen for real-time updates
      const querySnapshot =await getDocs(collection(db,'bedroom'));
      // console.log(querySnapshot)
      const productsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(productsData)
      setBedroomProducts(productsData);
      setCurrentList(productsData);
      const sofasnap  = await getDocs(collection(db, 'sofa'));
      const sofaproductsData = sofasnap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setSofaProducts(sofaproductsData);
      const dinsap  = await getDocs(collection(db, 'dining table'));
      const dinprodu = dinsap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setDiningTableProducts(dinprodu);
      // console.log(bedroomProducts)
      // setCurrentList(bedroomProducts)
    } catch (error) {
      console.log(error);
    }
  };
  
  
  useEffect(() => {
  
    fetchProducts();
  }, []);
  const handleDeleteProduct = async (productId, category) => {
    console.log(productId)
    try {
      // Delete the product from Firestore
      await deleteDoc(doc(db, category, productId));
      
      // Remove the deleted product from the local state
      if (category === 'bedroom') {
        setBedroomProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      } else if (category === 'sofa') {
        setSofaProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      } else if (category === 'dining table') {
        setDiningTableProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filters =(prodlist,fil) =>{
    // console.log("filters")
  const filteredList = prodlist.filter(product =>
    product.selectedSubCategory === fil
  );
  // console.log(filteredList)
  return filteredList;
  }

  return (
    <div className=" w-100" >
      <div className="row">
        <div className="col-lg-2 px-5 " style={{backgroundColor:'#f2f2f2',height:'100vh'}}>
          <a className='row mt-4 px-2 fw-bold' onClick={()=>setCurrentList(bedroomProducts)}  style={{ color: 'black',cursor: 'pointer',fontSize:'19px'}}>Bedroom Product List</a>
          <a className='row px-4 ' onClick={()=>setCurrentList(filters(bedroomProducts,"bed"))}  style={{ color: 'black',cursor: 'pointer' }}>{" "}Bed </a>
          <a className='row px-4 ' onClick={()=>setCurrentList(filters(bedroomProducts,"dressing"))}  style={{ color: 'black',cursor: 'pointer' }}>{" "}Dressing Table </a>
          <a className='row px-4 ' onClick={()=>setCurrentList(filters(bedroomProducts,"night stand"))}  style={{ color: 'black',cursor: 'pointer' }}>{" "}Night Stand </a>
          <a className='row mt-3 px-2 fw-bold' onClick={()=>setCurrentList(sofaProducts)}  style={{ color: 'black',cursor: 'pointer',fontSize:'19px' }}>Sofa Product List</a>
          <a className='row px-4 ' onClick={()=>setCurrentList(filters(sofaProducts,"sofacum"))}  style={{ color: 'black',cursor: 'pointer' }}>{" "}Sofa Cum Bed </a>
          <a className='row px-4 ' onClick={()=>setCurrentList(filters(sofaProducts,"sofa"))}  style={{ color: 'black',cursor: 'pointer' }}>{" "}Sofa </a>
          <a className='row mt-3 px-2 fw-bold' onClick={()=>setCurrentList(diningTableProducts)}  style={{ color: 'black',cursor: 'pointer' ,fontSize:'19px'}}>Dining Product List</a>
          <a className='row px-4 ' onClick={()=>setCurrentList(filters(diningTableProducts,"diningTable"))}  style={{ color: 'black',cursor: 'pointer' }}>{" "}Dining Table </a>
          <a className='row px-4 ' onClick={()=>setCurrentList(filters(diningTableProducts,"diningChair"))}  style={{ color: 'black',cursor: 'pointer' }}>{" "}Dining Chairs </a>
        
        </div>
        <div className="col-lg-10">
          <div className="row row-cols-1 row-cols-md-5 g-4 pt-2 px-3" >
            {currentList.map((product, index) => (
              <div className="col" key={index}>
                <div className="card " style={{ 
                  width: "282px",
                backgroundColor:'#f2f2f2'}} >
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
                    <button
                  type="button"
                  onClick={() => handleDeleteProduct(product.id, product.selectedCategory)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                  </div>
                </div>
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
