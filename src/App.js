import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/post' element={<Posts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
