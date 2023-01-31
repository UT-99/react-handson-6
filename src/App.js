import React from 'react';

import Navigation from './components/Navigation'
import Edit from './components/Edit';
import Students from './components/Students';
import AddStudents from './components/AddStudents';
import './App.css';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
          <Route path="/Contact" element={<ContactUs/>}/>
          <Route path="/Edit" element={<Edit/>}/>
          <Route path="/AddStudents" element={<AddStudents/>}/>
   </Routes>
    </div>
  )
}
export default App