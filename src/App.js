
import './App.css';
import Nav from './pages/Nav';
import About from './pages/About';
import Clients from './pages/Clients';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import MainTestimonials from './pages/MainTestimonial';
import ContactFooter from './pages/ContactFooter';



function App() {
  return (
    <div className="App">
    <Nav/>    
    <About/>
    <Clients/>
    <Services/>
    <Testimonials/>
    <MainTestimonials/>
    <ContactFooter/>
    </div>
  );
}

export default App;
