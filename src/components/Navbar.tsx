import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Category from "../pages/Category";
import Detail from "../pages/Detail";


function Navbar() {

    let [categories, setCategories]=useState<any[]>([])
    useEffect(()=>{
        axios.get("https://bankingkhabar.com/wp-json/wp/v2/categories").then(res=>{setCategories(res.data)})
    })
  return (
    <>
      <nav className="navbar navbar-expand-lg top navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {categories.slice(0,9).map((item)=>(
                <li className="nav-item" key={item.id}>
                <Link className="nav-link" to={`/category/${item.id}`}>
                  {item.name}
                </Link>
              </li>

              ))}
              
             
          
            </ul>
           
          </div>
        </div>
      </nav>
        <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/category/:cid' element={<Category/>}/>
       <Route path='/detail/:id' element={<Detail/>}/> 
    </Routes>
    </>
  );
}

export default Navbar;
