import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App" >
      <Router>
            <Switch>
              <Route path="/productos">
                <ProductsPage/>
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
