import React,{useState} from 'react';
import Products from './Products';
import './Product.css';
import Cart from './Cart';

const Page_Product='product'
const Page_Cart='cart';


const Product=()=>{
    const [cart,setcart]=useState([]);
    const [page,setpage]=useState(Page_Product);
    
    const addcart=(product)=>{
        setcart([...cart,{...product}]);
    };


const removecart=(productremove)=>{
    setcart(cart.filter((product)=> product!==productremove))
}

const navigate=(nextpage)=>{
    setpage(nextpage);
}
return(
    <div>
        
        <header>
            <button className="btn" onClick={()=>navigate(Page_Cart)}>Favorite ({cart.length})</button>
            <button className="btn" onClick={()=>navigate(Page_Product)}>View Planets</button>
        </header>
        {page===Page_Product &&( <Products addcart={addcart}/>)}
        {page===Page_Cart && <Cart cart={cart} removecart={removecart} />}
    </div>
); 
}

export default Product;