import React from 'react';


const Cart=({removecart,cart})=>{
    return(
        <>
         <div className="planets">
        <h1>Favorite List Planets</h1>
        <div className="planet">
        {cart.map((product,index)=>(
            <div className="pd" key={index}>
                <h3>{product.name}</h3>
                 
                <button onClick={()=>removecart(product)}>Remove</button>
        </div>
        ))}
        </div>
        </div>
        </>
    )
}

export default Cart;