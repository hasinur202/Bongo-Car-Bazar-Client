import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './Pages/ProductDetails/ProductDetails/ProductDetails';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Order from './Pages/Order/Order';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AllProduct from './Pages/AllProduct/AllProduct';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/all-products">
              <AllProduct></AllProduct>
            </Route>
            <PrivateRoute path="/product-details/:_id">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:_id">
              <Order></Order>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
