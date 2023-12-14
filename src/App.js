import './App.css';
import Navbar from './Componants/Navbar/Navbar';
import Home from './Componants/Home/Home';
import Product from './Componants/Products/Product';
import Service from './Componants/Services/Service';
import Counter from './Componants/Counters/Counter';
import Solutions from './Componants/SolutionsOffering/Solutions';
// import Client from './Componants/Client/Client';
import TrustedClients from './Componants/TrustedClients/TrustedClients';
import Contact from './Componants/ContactUs/Contact';
import Blogs from './Componants/RecentBlogs/Blogs';
import Footer from './Componants/footer/footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Product/>
    <Service/>
    <Counter/>
    <Solutions/>
   {/* <Client/> */}
   <TrustedClients/>
   <Contact/>
   <Blogs/>
  <Footer/>

  
    </div>
  );
}

export default App;
