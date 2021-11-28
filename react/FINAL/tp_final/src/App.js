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
import HomePublic from './Pages/Public/HomePublic';
import RegisterPublic from './Pages/Public/RegisterPublic';
import LoginPublic from './Pages/Public/LoginPublic';
import ProductsPublic from './Pages/Public/ProductsPublic';




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
          
            <Route path="/login" component={LoginPublic}/>
            <Route path="/register" component={RegisterPublic} />
            <Route path="/productos" component={ProductsPublic}/>
            <Route path="/" component={HomePublic} />
            
             
            <Route path="*" component={NotFound}/>
            
        </Switch> 
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
