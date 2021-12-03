import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Trades from './components/Trades';
import MyItems from './components/MyItems';
import AddItem from './components/AddItem';

function App() {
  return (
      <>
        <Router>
          <main>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/trades" element={<Trades/>}/>
              <Route exact path="/myItems" element={<MyItems/>}/>
              <Route exact path="/additem" element={<AddItem/>}/>
            </Routes>
          </main>
        </Router>
      </>
  );
}
  
export default App;
  