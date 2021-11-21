
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeAdmin from './Pages/Admin/HomeAdmin';
import PerfilAdmin from './Pages/Admin/PerfilAdmin';
import NotFound from './Pages/NotFound';
import LoginAdmin from './Pages/Admin/LoginAdmin';
import RegisterAdmin from './Pages/Admin/RegisterAdmin';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/admin/login">
            <LoginAdmin/>
          </Route>  
          <Route path="/admin/register">
            <RegisterAdmin/>
          </Route>  
          <Route path="/admin/perfil">
            <PerfilAdmin/>
          </Route>
          <Route path="/admin">
            <HomeAdmin/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
                
          
      </Router>
    </div>
  );
}

export default App;
