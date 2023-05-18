import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCLMsu-6pXKEVV34-o7WCIwNqc-jZUUSIc",
    authDomain: "furniture-3a7d0.firebaseapp.com",
    projectId: "furniture-3a7d0",
    storageBucket: "furniture-3a7d0.appspot.com",
    messagingSenderId: "70034942573",
    appId: "1:70034942573:web:b16d104668b2aa973fad64"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedTraits, setSelectedTraits] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const snapshot = await collection(db,'products');
      const querySnapshot = await getDocs(snapshot);
      console.log(querySnapshot)
      const fetchedProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(fetchedProducts)
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleTraitSelection = (event) => {
    const selectedTrait = event.target.value;
    setSelectedTraits((prevTraits) =>
      prevTraits.includes(selectedTrait)
        ? prevTraits.filter((trait) => trait !== selectedTrait)
        : [...prevTraits, selectedTrait]
    );
  };

  const filteredProducts = products.filter((product) => {
    // Customize this logic based on your traits and product structure
    return selectedTraits.every((selectedTrait) => {
      const productTraits = product.traits || []; // Assuming traits are stored in a 'traits' field
      return productTraits.includes(selectedTrait);
    });
  });

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <h2>Filter Traits:</h2>
        <label>
          <input
            type="checkbox"
            value="size"
            checked={selectedTraits.includes('size')}
            onChange={handleTraitSelection}
          />
          Size
        </label>
        <label>
          <input
            type="checkbox"
            value="height"
            checked={selectedTraits.includes('height')}
            onChange={handleTraitSelection}
          />
          Height
        </label>
        {/* Add more trait checkboxes based on your data */}
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
