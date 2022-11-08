import React, { Component } from "react";
import { Navigate, useOutletContext } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();
  const OutletContent = useOutletContext();

  return (
    <div>
      <h1>Product</h1>
      <h2>Details Im product id {id}</h2>
      <p>Soy el contenido del Outlet: {OutletContent.hello}</p>

    </div> 
   );
}
 
export default ProductDetails;