import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Posts from './components/Posts';
import SideBar from './components/SideBar';
import Login from './components/Login'
import * as React from 'react';
import './App.css'





const App = ()=> 
  
 

   (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}  />
    <Route path= "/" element={<><SideBar/><Home/></>} />
    <Route path= "/users" element={<><SideBar/><Users/></>} />
    <Route path="/posts" element={<> <SideBar/>  <Posts/> </>} />
    </Routes>
    

    </BrowserRouter>
  );






export default App