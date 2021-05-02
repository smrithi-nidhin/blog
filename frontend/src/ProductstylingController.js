
import React, { useState }  from "react";

import{Link} from 'react-router-dom'
  import BellIcon from 'react-bell-icon';
import comment from "./features/comment";
import Comment from './features/comment';

function ProductstylingController({ booksObject,title, description, imagePath,image}) {
    
  //  const alertName=()=>{
     
  //      alert('Book Added to cart and price is ' +price )
  //  };
//    const [cart,setCart]= useState([]);//
//alert(booksObject.title);
return (
    
    <div className="container">
      
        {/* <p className="image">
        <img src= {image}  width="150px" height="250px"></img>
        </p>  */}
       
          
       
       <img src= {imagePath}  width="250px" height="250px"></img>
      
       
            <Link to =
                   {{ 
                    pathname: "/getBooksByTitle",
                   booksObject:booksObject,
                   // title:"title",
                    //price: booksObject.price,
                    //imagePath:booksObject.imagePath
                    }}>
                       
                          <p>{title}</p> 
 </Link>

        
        
       {/* <div className="product__info"> */}
      
        {/* </div>
         <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
         </p> }
        
       <button onClick={alertName} > Add to Basket</button> */}
      </div>
      
     
  );

                }
export default ProductstylingController;