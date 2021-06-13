import './App.css';
import Collections from './components/Collections';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NewCollection from './components/NewCollection';
import Newsletter from './components/Newsletter';
import Offer from './components/Offer';
import Wemen from './components/Wemen';
import {  Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router>

        <Route path="/login">
          <Header/>

          <LogIn/>

          <Footer/>
        </Route>

        <Route path="/shop">
          <Header/>
          
          <Shop/>
          <Featured/>

          <Footer/>
        </Route>

        <Route path="/mens">
          <Header/>
          
          <MenPage/>
          <Featured/>

          <Footer/>
        </Route>

        <Route path="/womens">
          <Header/>
          
          <WomenPage/>
          <Featured/>

          <Footer/>
        </Route>


        <Route path="/cart">
          <Header/>
          
          <Cart/>

          <Footer/>
        </Route>

        <Route path="/product">
          <Header/>
          
          <ProductPage/>

          <Footer/>
        </Route>

        <Route path="/" exact>
          <Header/>
          <main className="l-main">
            <Home/>
            <Featured/>
            <Collections/>
            <Wemen/>
            <Offer/>
            <NewCollection/>
            <Newsletter/>
          </main>
          <Footer/>
        </Route>


      </Router>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
