
import './App.css';
import Header from './Components/header/Header';
import Product from './Components/product/Product';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Product/>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
