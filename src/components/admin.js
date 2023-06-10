// Import the necessary Firebase libraries
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection
  // , onSnapshot
  , addDoc, deleteDoc, doc,getDocs } from 'firebase/firestore';
import {getStorage,ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';

// Create a Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
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
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      border: "1px solid black",
      borderRadius: "10px"
    }}>
      <h1 style={{ fontSize: "24px" }}>Login</h1>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ 
          width: "30%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px"
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ 
          width: "30%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px"
        }}
      />
      <button
        onClick={handleSubmit}
        style={{ 
          width: "30%",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "blue",
          color: "white",
          fontWeight: "bold"
        }}
      >
        Login
      </button>
    </div>
  );
  
};

// Create a component to display the home page
const HomePage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [customization, setCustomization] = useState('');
  // const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState('');
  const [selectedSubCategory,setSelectedSubCategory]=useState('');
  const [optionChange,setoptionChange] = useState('');
  const [prodId,setProdId]=useState(0);
  
  
  const [bedProducts, setBedProducts] = useState([]);
  const [sofaProducts, setSofaProducts] = useState([]);
  const [diningTableProducts, setDiningTableProducts] = useState([]);
  const [centerTableProducts, setcenterTableProducts] = useState([]);
  const [cupboardProducts, setcupboardProducts] = useState([]);
  const [couchesProducts, setccouchesProducts] = useState([]);
  const [dressProducts, setdressProducts] = useState([]);
  const [sideProducts, setsideProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      // Fetch products from Firestore and listen htmlFor real-time updates
      const querySnapshot =await getDocs(collection(db,'Beds'));
      // console.log(querySnapshot)
      const productsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(productsData)
      setBedProducts(productsData);
      const sofasnap  = await getDocs(collection(db, 'Sofa'));
      const sofaproductsData = sofasnap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setSofaProducts(sofaproductsData);
      const cupboarddinsap  = await getDocs(collection(db, 'Cupboard'));
      const cupboarddinprodu = cupboarddinsap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setcupboardProducts(cupboarddinprodu);
      const centerdinsap  = await getDocs(collection(db, 'Center Table'));
      const centerdinsapdinprodu = centerdinsap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setcenterTableProducts(centerdinsapdinprodu);

      const dinsap  = await getDocs(collection(db, 'Dining Table'));
      const dinprodu = dinsap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setDiningTableProducts(dinprodu);
      const couchesdinsap  = await getDocs(collection(db, 'Couches'));
      const coudinprodu = couchesdinsap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setccouchesProducts(coudinprodu);
      const sidedinsap  = await getDocs(collection(db, 'Side Table'));
      const sidedinprodu = sidedinsap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setsideProducts(sidedinprodu);
      const dressdinsap  = await getDocs(collection(db, 'Dressing Table'));
      const dressdinprodu = dressdinsap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      setdressProducts(dressdinprodu);
      // console.log(bedroomProducts)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {

    fetchProducts();
  }, []);



  const categoryList = ['Sofa','Beds','Cupboard','Center Table','Dining Table','Couches','Side Table','Dressing Table']
  const sofasubCategoryList = ['Sofa cumbed','Sofa with louger','Sofa 3+1+1','Sofa 3+2']
  const bedsublist = ['King Size','Queen Size']
  const cupboardlist = ['Backpainted Glass','Digital Glass','Laminate Finish','Wall to Wall']
  const centertablelist = ['Marble Top','Wooden Top','Onex For table Top','1+1','Glass Top']
  const diningtablelist = ['Marble Top (Wooden Base)','Marble Top (Steel Base)','Glass Top (Steel Base)','Wooden Dining Table']
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTraitsChange = (event) => {
    setCustomization(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    if (event.target.value==="Sofa"){
      setoptionChange(
        <select
        id="subcategory"
        className="form-control"
        value={selectedSubCategory}
        onChange={handleSubCategoryChange}
      >
        <option value="">Select Sub-Category</option>
        {sofasubCategoryList.map((product, index)=>{
          return (<option value={product} key={index}>{product}</option>)
        })}
      </select>
        )}
    else if (event.target.value==="Beds"){
      setoptionChange(
        <select
        id="subcategory"
        className="form-control"
        value={selectedSubCategory}
        onChange={handleSubCategoryChange}
      >
        <option value="">Select Sub-Category</option>
        {bedsublist.map((product, index)=>{
          return (<option value={product} key={index}>{product}</option>)
        })}
      </select>)}
    else if (event.target.value==="Cupboard"){
      setoptionChange(
        <select
        id="subcategory"
        className="form-control"
        value={selectedSubCategory}
        onChange={handleSubCategoryChange}
      >
        <option value="">Select Sub-Category</option>
        {cupboardlist.map((product, index)=>{
          return (<option value={product} key={index}>{product}</option>)
        })}
      </select>)}
      else if (event.target.value==="Center Table"){
        setoptionChange(
          <select
          id="subcategory"
          className="form-control"
          value={selectedSubCategory}
          onChange={handleSubCategoryChange}
        >
          <option value="">Select Sub-Category</option>
          {centertablelist.map((product, index)=>{
            return (<option value={product} key={index}>{product}</option>)
          })}
        </select>)}
        else if (event.target.value==="Dining Table"){
          setoptionChange(
            <select
            id="subcategory"
            className="form-control"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
          >
            <option value="">Select Sub-Category</option>
            {diningtablelist.map((product, index)=>{
              return (<option value={product} key={index}>{product}</option>)
            })}
          </select>)}
    else {
      setoptionChange(
        <select
        id="subcategory"
        className="form-control"
        value={selectedSubCategory}
        onChange={handleSubCategoryChange}
      >
        <option value="">Select Category</option>
      </select>)
    }
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleIdChange = (event)=>{
    setProdId(event.target.value);
  }
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
            prodId,
            price,
            customization,
            selectedCategory,
            selectedSubCategory,
            urll,
          };
          // Add the new product to Firestore
          console.log(newProduct)
          if (selectedCategory==='sofa'){
          await addDoc(collection(db, 'sofa'), newProduct);
          setProducts((prevProducts) => [...prevProducts, newProduct]);
          setName('');
          setPrice('');
          setCustomization('');
          // setCategory('');
          // setUrl('');
        }
          else if (selectedCategory==='beds'){
            await addDoc(collection(db, 'beds'), newProduct);
            setProducts((prevProducts) => [...prevProducts, newProduct]);
            setName('');
            setPrice('');
            setCustomization('');
            // setCategory('');
            // setUrl('');
          }
          else if (selectedCategory==='Cupboard'){
            await addDoc(collection(db, 'Cupboard'), newProduct);
            setProducts((prevProducts) => [...prevProducts, newProduct]);
            setName('');
            setPrice('');
            setCustomization('');
            // setCategory('');
            setUrl('');}   
            else if (selectedCategory==='centerTable'){
              await addDoc(collection(db, 'centerTable'), newProduct);
              setProducts((prevProducts) => [...prevProducts, newProduct]);
              setName('');
              setPrice('');
              setCustomization('');
              // setCategory('');
              // setUrl('');
            }
            else if (selectedCategory==='Dining Table'){
              await addDoc(collection(db, 'Dining Table'), newProduct);
              setProducts((prevProducts) => [...prevProducts, newProduct]);
              setName('');
              setPrice('');
              setCustomization('');
              // setCategory('');
              setUrl('');}
            else if (selectedCategory==='Dressing Table'){
              await addDoc(collection(db, 'Dressing Table'), newProduct);
              setProducts((prevProducts) => [...prevProducts, newProduct]);
              setName('');
              setPrice('');
              setCustomization('');
              // setCategory('');
              setUrl('');}
            else if (selectedCategory==='Couches'){
              await addDoc(collection(db, 'Couches'), newProduct);
              setProducts((prevProducts) => [...prevProducts, newProduct]);
              setName('');
              setPrice('');
              setCustomization('');
              // setCategory('');
              setUrl('');}
              else if (selectedCategory==='Side Table'){
                await addDoc(collection(db, 'Side Table'), newProduct);
                setProducts((prevProducts) => [...prevProducts, newProduct]);
                setName('');
                setPrice('');
                setCustomization('');
                // setCategory('');
                setUrl('');}
        }
      );})
    } catch (error) {
      console.log(error);
    }
  };


  const handleDeleteProduct = async (productId, category) => {
    console.log(category,productId)
    try {
      // Delete the product from Firestore
      await deleteDoc(doc(db, category, productId));
      
      // Remove the deleted product from the local state
      if (category === 'Beds') {
        setBedProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      } else if (category === 'Sofa') {
        setSofaProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      } else if (category === 'Dining Table') {
        setDiningTableProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
      else if (category === 'Cupboard') {
        setcupboardProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
      else if (category === 'Center Table') {
        setcenterTableProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
      else if (category === 'Couches') {
        setccouchesProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
      else if (category === 'Side Table') {
        setsideProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
      else if (category === 'Dressing Table') {
        setdressProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <h1>Product List</h1> */}
      <div className="container">
  <div className="row">
    <div className="row-4">
      <form className="row row-cols-1 row-cols-md-4 g-4">
        <div className="mb-3 mr-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3 mr-3">
          <label htmlFor="name" className="form-label">ID:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={prodId}
            onChange={handleIdChange}
          />
        </div>
        <div className="mb-3 mr-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="text"
            id="price"
            className="form-control"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="mb-3 mr-3">
          <label htmlFor="customization" className="form-label">customization:</label>
          <input
            type="text"
            id="customization"
            className="form-control"
            value={customization}
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
          {categoryList.map((product, index)=>{
            return (<option value={product} key={index}>{product}</option>)
          })}
        </select>
      </div>
      <div className="mb-3 mr-3">
        <label htmlFor="category" className="form-label">
          Sub-Category:
        </label>
        {optionChange?optionChange:<select
          id="subcategory"
          className="form-control"
          value={selectedSubCategory}
          onChange={handleSubCategoryChange}
        >
          <option value="">Select Category</option>
        </select>}
        </div>
      
        <div className="mb-3 mr-1">
          <label htmlFor="image" className="form-label">Image:</label>
          <input
            type="file"
            id="image"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>
        <button
          type="button"
          onClick={handleAddProduct}
          className="btn btn-primary"
        >
          Add Product
        </button>
      </form>
    </div>
  </div>
</div>

          <h2>Beds Product List:</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 ml-3  p-3" >
        {bedProducts.map((product, index) => (
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
                <p className="card-text">Traits: {product.customization}</p>
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
      
      <h2>SOFA Product List:</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 p-3" >
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
                <p className="card-text">Traits: {product.customization}</p>
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
      <h2>Dining Table Products:</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4  p-3" >
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
                <p className="card-text">Traits: {product.customization}</p>
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
      <h2>center table Product List:</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 ml-3  p-3" >
        {centerTableProducts.map((product, index) => (
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
                <p className="card-text">Traits: {product.customization}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product.id,product.selectedCategory)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>cupboard Product List:</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 ml-3  p-3" >
        {cupboardProducts.map((product, index) => (
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
                <p className="card-text">Traits: {product.customization}</p>
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
      <h2>Couches Product List:</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 ml-3  p-3" >
        {couchesProducts.map((product, index) => (
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
                <p className="card-text">Traits: {product.customization}</p>
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
      <h2>Dressing Table Product List:</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 ml-3  p-3" >
        {dressProducts.map((product, index) => (
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
                <p className="card-text">Traits: {product.customization}</p>
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
      <h2>Side Table Product List:</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 ml-3  p-3" >
        {sideProducts.map((product, index) => (
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
                <p className="card-text">Traits: {product.customization}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product.id,  product.selectedCategory)}
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
  );


};


  return (
    <div>
      
      {user? null:<LoginForm />}
      {user? <HomePage />:null}
      {/* <HomePage/> */}
    </div>
  );
};

// Render the App component
export default Admin;
