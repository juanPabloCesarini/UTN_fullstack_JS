import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import ProductsPage from './Pages/ProductsPage';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
function App() {
  return (
    <div className="App" >
      <Router>
            <Switch>
              <Route path="/productos">
                <ProductsPage/>
              </Route>
            
              <Route path="/register">
                <RegisterPage/>
              </Route>
          
              <Route path="/login">
                <LoginPage/>
              </Route>  
          
              <Route path="/">
                <HomePage/>
              </Route>
            
            </Switch>
      </Router>
    </div>
  );
}

export default App;
