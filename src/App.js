import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Trades from './components/Trades';
import MyItems from './components/MyItems';
import AddItem from './components/AddItem';
import Login from './components/Login';
import Item from './components/Item';

import './styles/animation.css';

function App() {
  return (
      <>
        <Router>
            <main>
                <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/profile" element={<Profile/>}/>
                  <Route exact path="/trades" element={<Trades/>}/>
                  <Route exact path="/myitems" element={<MyItems/>}/>
                  <Route exact path="/additem" element={<AddItem/>}/>
                  <Route exact path="/login" element={<Login/>}/>
                  <Route exact path="/item" element={<Item/>}/>
                </Routes>
            </main>         
        </Router>
      </>
  );
}
  
export default App;
  