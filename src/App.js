import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header.js'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
