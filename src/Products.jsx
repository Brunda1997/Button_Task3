import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Products=({addcart})=>{
    
    const[products,setposts]=useState([]);
    useEffect(()=>{
        axios.get('https://assignment-machstatz.herokuapp.com/planet')
        .then(res=>{
            console.log(res)
            setposts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    
    return(
    <>
      <div className="planets">
        <h1>Solar System </h1>
        <div className="planet">
        {products.map((product)=>(
            <div className="planet_system" key={product.id}>
                <h3>{product.name}</h3>
                <button  onClick={()=>addcart(product)}>Add to Favorite</button>
        </div>
        ))}
        </div>
        </div>
        </>
);
}
export default Products;