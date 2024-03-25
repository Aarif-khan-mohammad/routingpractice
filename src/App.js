import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import  Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound.js';
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
