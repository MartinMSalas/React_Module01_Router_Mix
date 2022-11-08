import React, { Component } from 'react';
import {Route, Routes,} from "react-router-dom"

import Home from './components/home';
import Products from './components/products';
import Posts from './components/posts';
import Dashboard from './components/admin/dashboard';
import NavBar from './components/navbar';
import ProductDetails from './components/productDetails';


class App extends Component {
  state = {  } 
  render() {
    return (
      <div>
        <Routes>
          <Route path="/products/*" element={<h1>Soy un contenido adicional</h1>}></Route>
        </Routes>
        <NavBar></NavBar>
        <div className='content'>
          <Routes>
            <Route path="/products" element={<Products sortBy="newest" ></Products>}>
              <Route path="/products/:id" element={<ProductDetails  ></ProductDetails>}></Route>
            </Route>
            <Route path="/posts/:year/:month" element={<Posts></Posts>}></Route>
            <Route path="/admin" element={<Dashboard></Dashboard>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<h2>404 !!</h2>}></Route>
            {/*
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/" element={<Layout></Layout>}> </Route>
                <Route index element={<Home></Home>}></Route>
                <Route path="users" element={<Users></Users>}>
                  <Route index element={<div>Seleccione un usuario</div>}></Route>      
                  <Route path=":userId" element={<User></User>}></Route>
                </Route>                
                <Route path="about" element={<About></About>}></Route>
                <Route path="*" element={<div> 404 - Not  Found</div>}></Route>            
                <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
            */
            }
          </Routes>
        </div>


     
      </div>

    ) 
  }
}
 
export default App;
