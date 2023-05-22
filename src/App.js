import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Banner from './pages/Banner/Banner';

function App() {
  return (
    <div className="text-center">
      
      
      

      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/home' element={<Banner></Banner>}></Route>
        </Routes>
        <Footer></Footer>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
