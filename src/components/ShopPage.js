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

  return (
    <div className=" w-100" >
      <div className="row">
        <div className="col-lg-2 px-5">
          <a className='row my-3' onClick={()=>setCurrentList(bedroomProducts)}>Bedroom Product List</a>
          <a className='row my-3' onClick={()=>setCurrentList(sofaProducts)}>Sofa Product List</a>
          <a className='row my-3' onClick={()=>setCurrentList(diningTableProducts)}>Dining Product List</a>
        </div>
        <div className="col-lg-7 px-5">
          <div className="row row-cols-1 row-cols-md-3 g-4 ml-3  p-3" >
            {currentList.map((product, index) => (
              <div className="col" key={index}>
                <div className="card border-primary border-2" style={{ width: "304px"}} >
                    <img
                      src={product.urll}
                      alt={product.name}
                      className="card-img-top"
                      style={{ objectFit: "cover", width: "300px", height: "300px" }}
                    />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="card-text">Price: {product.price}</div>
                    
                    <div className="card-text">Traits: {product.traits}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
        <div className="col-lg-3  pr-5 px-5 text-end">Column 3</div>
      </div>
    </div>
  );
};

export default ShopPage;
