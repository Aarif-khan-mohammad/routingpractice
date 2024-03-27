import './App.css';
import {BrowserRouter  , Switch , Route} from 'react-router-dom';
import  Home from './components/Home/index.js'
import About from './components/About/index.js'
import Contact from './components/Contact/index.js';
import NotFound from './components/NotFound/NotFound.js';
import BlogItemDetails from './components/BlogItemDetails/index.js';

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path='/blogs/:id' component={BlogItemDetails}/>
        <Route path="" component={NotFound}/>

        {/* <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route path='/blogs/:id'  element={<BlogItemDetails />}/> 
        <Route path='*' element={<NotFound/>}/>  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
