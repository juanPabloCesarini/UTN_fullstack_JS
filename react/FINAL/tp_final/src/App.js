
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeAdmin from './Pages/Admin/HomeAdmin';

import NotFound from './Pages/NotFound';
import LoginAdmin from './Pages/Admin/LoginAdmin';
import RegisterAdmin from './Pages/Admin/RegisterAdmin';
import AuthProvider from './Context/AuthProvider';
import CreateProduct from './CrudProductos/CreateProduct';
import ReadProduct from './CrudProductos/ReadProduct';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route path="/admin/login">
            <LoginAdmin/>
          </Route>  
          <Route path="/admin/register">
            <RegisterAdmin/>
          </Route>  
          <Route path="/admin/productos/lista">
            <ReadProduct/>
          </Route>
          <Route path="/admin/productos/nuevo">
            <CreateProduct/>
          </Route>
          <Route path="/admin">
            <HomeAdmin/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch> 
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
