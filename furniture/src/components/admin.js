// Import the necessary Firebase libraries
import React, { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


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
  const [products, setProducts] = useState([]);

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
    setCategory(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleAddProduct = () => {
    const newProduct = {
      name,
      price,
      traits,
      category,
      image,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    // Clear input fields and image after adding product
    setName('');
    setPrice('');
    setTraits('');
    setCategory('');
    setImage(null);
  };
  const handleDeleteProduct = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
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
        <div class="mb-3 mr-3">
          <label for="category" class="form-label">Category:</label>
          <input
            type="text"
            id="category"
            class="form-control"
            value={category}
            onChange={handleCategoryChange}
          />
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
      <h2>Product List:</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 " >
        {products.map((product, index) => (
          <div className="col" key={index}>
            <div className="card border-primary border-2" style={{ width: "304px"}} >
              {product.image && (
                <img
                  src={URL.createObjectURL(product.image)}
                  alt={product.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", width: "300px", height: "300px" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Traits: {product.traits}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(index)}
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
      
      {/* {user? null:<LoginForm />} */}
      {/* {user? <HomePage />:null} */}
      <HomePage/>
    </div>
  );
};

// Render the App component
export default Admin;
