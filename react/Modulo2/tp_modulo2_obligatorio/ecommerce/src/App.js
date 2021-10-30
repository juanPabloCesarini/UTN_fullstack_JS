import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';

import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import DetailPage from './Pages/DetailPage';
function App() {
  return (
    <div className="App" >
      <Router>
            <Switch>
           

              <Route path="/detalle/:id">
                <DetailPage/>
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
