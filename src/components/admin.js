// Import the necessary Firebase libraries
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc,getDocs } from 'firebase/firestore';
import {getStorage,ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';

// Create a Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCLMsu-6pXKEVV34-o7WCIwNqc-jZUUSIc",
  authDomain: "furniture-3a7d0.firebaseapp.com",
  projectId: "furniture-3a7d0",
  storageBucket: "furniture-3a7d0.appspot.com",
  messagingSenderId: "70034942573",
  appId: "1:70034942573:web:b16d104668b2aa973fad64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// Create a component to display the login form
const Admin = () => {
  const [user,setuser] = useState("");
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in the user with their email and password
      const user = await signInWithEmailAndPassword(auth,email, password);
      setuser(user)
      // If the user is logged in, redirect them to the home page
      // if (user) {
      //   window.location.href = "/admin";
      // }
    } catch (error) {
      // Display an error message if the sign in fails
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

// Create a component to display the home page
const HomePage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [traits, setTraits] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [bedroomProducts, setBedroomProducts] = useState([]);
  const [sofaProducts, setSofaProducts] = useState([]);
  const [diningTableProducts, setDiningTableProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState('');


  const fetchProducts = async () => {
    try {
      // Fetch products from Firestore and listen for real-time updates
      const querySnapshot =await getDocs(collection(db,'bedroom'));
      // console.log(querySnapshot)
      const productsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(productsData)
      setBedroomProducts(productsData);
      const sofasnap  = await getDocs(collection(db, 'sofa'));
      const sofaproductsData = sofasnap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setSofaProducts(sofaproductsData);
      const dinsap  = await getDocs(collection(db, 'dining table'));
      const dinprodu = dinsap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setDiningTableProducts(dinprodu);
      // console.log(bedroomProducts)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {

    fetchProducts();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTraitsChange = (event) => {
    setTraits(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleAddProduct = async () => {
   
     
  
    try {
      const uploadTask = uploadBytesResumable(ref(storage, `images/${image.name}`), image); //upload file to storage
      await uploadTask.on('state_changed', 
        (snapshot) => {
          // progress function ....
        }, 
        (error) => {
          // error function ....
          console.log(error);
        }, 
        () => {
          // complete function ....
          getDownloadURL(uploadTask.snapshot.ref).then(async (urll) => { 
            //get download url
            setUrl(urll); //set image url
           console.log(urll)
           const newProduct = {
            name,
            price,
            traits,
            category,
            urll,
          };
          // Add the new product to Firestore
          console.log(newProduct)
          if (selectedCategory==='bedroom'){
          await addDoc(collection(db, 'bedroom'), newProduct);
          setProducts((prevProducts) => [...prevProducts, newProduct]);
          setName('');
          setPrice('');
          setTraits('');
          setCategory('');
          // setUrl('');
        }
          else if (selectedCategory==='sofa'){
            await addDoc(collection(db, 'sofa'), newProduct);
            setProducts((prevProducts) => [...prevProducts, newProduct]);
            setName('');
            setPrice('');
            setTraits('');
            setCategory('');
            setUrl('');}
          else if (selectedCategory==='dining table'){
            await addDoc(collection(db, 'dining table'), newProduct);
            setProducts((prevProducts) => [...prevProducts, newProduct]);
            setName('');
            setPrice('');
            setTraits('');
            setCategory('');
            setUrl('');}
          //   const docRef = doc(firestore, 'images', image.name); //get document reference
          //   setDoc(docRef, {url: url}); //set image url in document
          // });
        }
      );})
    } catch (error) {
      console.log(error);
    }
  };
  // const handlebedroomDeleteProduct = (index) => {
  //   setBedroomProducts((prevProducts) => {
  //     const updatedProducts = [...prevProducts];
  //     updatedProducts.splice(index, 1);
  //     return updatedProducts;
  //   });
  // };
  // const handlesofaDeleteProduct = (index) => {
  //   setSofaProducts((prevProducts) => {
  //     const updatedProducts = [...prevProducts];
  //     updatedProducts.splice(index, 1);
  //     return updatedProducts;
  //   });
  // };
  // const handlediningDeleteProduct = (index) => {
  //   setDiningTableProducts((prevProducts) => {
  //     const updatedProducts = [...prevProducts];
  //     updatedProducts.splice(index, 1);
  //     return updatedProducts;
  //   });
  // };

  // const handleDeleteProduct = async (productId, category) => {
  //   try {
  //     // Delete the product from Firestore
  //     await deleteDoc(doc(db, 'products', category, productId));
  //     setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
    <div>
      <h1>Product List</h1>
      <div class="container">
  <div class="row">
    <div class="row-6">
      <form className="row row-cols-1 row-cols-md-6 g-4">
        <div class="mb-3 mr-3">
          <label for="name" class="form-label">Name:</label>
          <input
            type="text"
            id="name"
            class="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div class="mb-3 mr-3">
          <label for="price" class="form-label">Price:</label>
          <input
            type="text"
            id="price"
            class="form-control"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div class="mb-3 mr-3">
          <label for="traits" class="form-label">Traits:</label>
          <input
            type="text"
            id="traits"
            class="form-control"
            value={traits}
            onChange={handleTraitsChange}
          />
        </div>
        <div className="mb-3 mr-3">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <select
          id="category"
          className="form-control"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          <option value="bedroom">Bedroom</option>
          <option value="sofa">Sofa</option>
          <option value="dining table">Dining Table</option>
        </select>
      </div>
        <div class="mb-3 mr-1">
          <label for="image" class="form-label">Image:</label>
          <input
            type="file"
            id="image"
            class="form-control"
            onChange={handleImageChange}
          />
        </div>
        <button
          type="button"
          onClick={handleAddProduct}
          class="btn btn-primary"
        >
          Add Product
        </button>
      </form>
    </div>
  </div>
</div>
      {/* <h2>Bedroom Product List:</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 ml-3  p-3" >
        {bedroomProducts.map((product, index) => (
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
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Traits: {product.traits}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product.id, 'bedroom')}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>SOFA Product List:</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 p-3" >
        {sofaProducts.map((product, index) => (
          <div className="col " key={index}>
            <div className="card border-primary border-2" style={{ width: "304px"}} >
            <img
                  src={product.urll}
                  alt={product.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", width: "300px", height: "300px" }}
                />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Traits: {product.traits}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product.id, 'sofa')}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Dining Table Products:</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4  p-3" >
        {diningTableProducts.map((product, index) => (
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
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Traits: {product.traits}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product.id, 'dining table')}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );


};


  return (
    <div>
      
      {/* {user? null:<LoginForm />} */}
      {/* {user? <HomePage />:null} */}
      <HomePage/>
    </div>
  );
};

// Render the App component
export default Admin;
