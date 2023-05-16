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
  const [images, setImages] = useState([]);

  // Get all of the images from Firebase
  // const getImages = async () => {
  //   try {
  //     const query = db.collection("furniture-base");
  //     const snapshot = await query.get();

  //     // Set the images state to the results of the query
  //     setImages(snapshot.docs.map((doc) => doc.data()));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // Listen for changes to the images collection
  // db.collection("furniture-base").onSnapshot((snapshot) => {
  //   setImages(snapshot.docs.map((doc) => doc.data()));
  // });

  // Render a list of images
  return (
    <div>
      <h1>Home Page</h1>
      {/* {images.map((image) => (
        <img src={image.url} key={image.id} alt="nrih"/>
      ))}
      <button onClick={getImages}>Get Imagesd</button> */}
    </div>
  );
};


  return (
    <div>
      
      {user? null:<LoginForm />}
      {user? <HomePage />:null}
    </div>
  );
};

// Render the App component
export default Admin;
