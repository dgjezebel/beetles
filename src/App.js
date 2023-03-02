import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header.js'
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import FoodCartMenu from './pages/FoodCartMenu';
import CateringMenu from './pages/CateringMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='foodcartmenu' element={<FoodCartMenu/>}></Route>
        <Route path='cateringmenu' element={<CateringMenu/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
