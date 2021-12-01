import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LoginAdmin from './Pages/Admin/LoginAdmin';
import RegisterAdmin from './Pages/Admin/RegisterAdmin';
import ReadProduct from './CrudProductos/ReadProduct';
import UpdateProduct from './CrudProductos/UpdateProduct';
import DeleteProduct from './CrudProductos/DeleteProduct';
import CreateProduct from './CrudProductos/CreateProduct';
import HomeAdmin from './Pages/Admin/HomeAdmin';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound';
import HomeEcommerce from './Pages/Ecommerce/HomeEcommerce';
import RegisterEcommerce from './Pages/Ecommerce/RegisterEcommerce';
import LoginEcommerce from './Pages/Ecommerce/LoginEcommerce';
import ProductsEcommerce from './Pages/Ecommerce/ProductsEcommerce';
import DetailEcommerce from './Pages/Ecommerce/DetailEcommerce';
import CheckoutEcommerce from './Pages/Ecommerce/CheckoutEcommerce';



function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Router>
          <Switch>
            
            <Route path="/admin/login" component={LoginAdmin}/>
            <Route path="/admin/register"component={RegisterAdmin}/>         
            <Route path="/admin/productos/lista" component={ReadProduct}/>
            <Route path="/admin/productos/editar/:id" component={UpdateProduct}/>
            <Route path="/admin/productos/borrar/:id"component={DeleteProduct}/>
            <Route path="/admin/productos/nuevo"component={CreateProduct}/>
            <Route path="/admin" component={HomeAdmin}/>
          
            <Route path="/login" component={LoginEcommerce}/>
            <Route path="/register" component={RegisterEcommerce} />
            <Route path="/productos" component={ProductsEcommerce} />
            <Route path="/detalle/:id" component={DetailEcommerce}/>
            <Route path="/confirm/:id" component={CheckoutEcommerce}/>
            <Route path="/" component={HomeEcommerce} />
            
             
            <Route path="*" component={NotFound}/>
            
        </Switch> 
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
