import {React, useState,useEffect,useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore,doc,getDoc} from 'firebase/firestore';
import { useParams   } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { CartContext } from '../App';


const ItemDetails = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCLMsu-6pXKEVV34-o7WCIwNqc-jZUUSIc",
    authDomain: "furniture-3a7d0.firebaseapp.com",
    projectId: "furniture-3a7d0",
    storageBucket: "furniture-3a7d0.appspot.com",
    messagingSenderId: "70034942573",
    appId: "1:70034942573:web:b16d104668b2aa973fad64"
  };
  const { cart, addToCart,handleDataTransfer  } = useContext(CartContext);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { id } = useParams();
  const {category} = useParams();
  const [product,setProduct] = useState();

  const fetchProducts = async () => {
    try {
      // Fetch products from Firestore and listen for real-time updates
      // const querySnapshot = await getDocs(collection(db,category));
      // const docRef = app.firestore().collection(db).doc(id);
      // const docSnapshot = await docRef.get();
      const docRef = await doc(db,category, id);
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data())

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

      // console.log(docSnapshot)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  
    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    // console.log(cart)
    // if (cart[product.prodId]) {
    //   // If the product is already in the cart, increase the count by 1
    //   const count = cart[product.prodId];
    //   console.log(count)
    //   addToCart({
    //     ...cart,
    //     [product.prodId]: count + 1
    //   });
    // } else {
    //   // If the product is not in the cart, add it with count 1
    //   addToCart({
    //     ...cart,
    //     [product.prodId]: 1
    //   });
    // }
    addToCart(product)
  };
  return (
    <div>
      <h2>Item Details</h2>
      {product?
        <div>
          <h3>category: {product.selectedCategory}</h3>
          <h3>Name: {product.name}</h3>
          <h3>subCategory: {product.selectedSubCategory}</h3>
          <img
                      src={product.urll}
                      alt={product.name}
                      className="card-img-top"
                      style={{ objectFit: "cover", 
                      width: "280px", height: "280px"
                     }}
                    />
          <h3>customs: {product.customization}</h3>
          <button onClick={handleAddToCart}>Add to Cart</button>
          
          <p>Count: {cart[product.prodId]}</p>
        </div>: (
      <div style={{ textAlign: "center" }}>
        <BeatLoader color="#000" loading={true} size={15} />
      </div>
    )}
    </div>
  );
};

export default ItemDetails;