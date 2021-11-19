import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./Common/Header/Footer/Footer";
import Header from './Common/Header/Header';
import About from "./Components/About/About";
import AddServices from "./Components/AddServices/AddServices";
import Cart from "./Components/Cart/Cart";
import Contact from "./Components/Contact/Contact";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login/Login";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/ManageServices/ManageServices";
import MyOrder from "./Components/MyOrder/MyOrder";
import NotFound from "./Components/NotFound/NotFound";
import PaymentGetWay from "./Components/PaymentGetWay/PaymentGetWay";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Registration from "./Components/Registration/Registration";
import Serve from "./Components/Serve/Serve";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div >
    <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
      <Route exact path = '/'>
            <Home></Home>
        </Route>
        <Route exact path = '/home'>
            <Home></Home>
        </Route>
        <Route path = '/about'>
            <About></About>
        </Route>
        <Route path = '/services'>
            <Serve></Serve>
        </Route>
        <Route path='/service/:serviceId'>
          <ServiceDetail></ServiceDetail>
        </Route>
        <PrivateRoute exact path="/placeorder/:serviceId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
        <PrivateRoute path='/addservice'>
          <AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute path='/myorder'>
          <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute path='/manage'>
          <ManageServices></ManageServices>
        </PrivateRoute>
        <PrivateRoute path='/admin'>
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <Route path = '/cart/:serviceId'>
            <Cart></Cart>
        </Route>
        <PrivateRoute path='/payment'>
          <PaymentGetWay></PaymentGetWay>
        </PrivateRoute>
        <Route path = '/contact'>
            <Contact></Contact>
        </Route>
        <Route path = '/login'>
            <Login></Login>
        </Route>
        <Route path = '/registration'>
            <Registration></Registration>
        </Route>
        <Route path = '/*'>
            <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
