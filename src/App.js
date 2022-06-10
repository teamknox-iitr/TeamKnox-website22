import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import About from './components/about';
import Sponsor from './components/sponsor';
import ATV from './components/atv';
import Gallery from './components/gallery';
import Contact from './components/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sponsors' element={<Sponsor />} />
          <Route path='/atv' element={<ATV />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
