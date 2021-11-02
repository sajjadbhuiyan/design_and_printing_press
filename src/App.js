import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./Common/Header/Footer/Footer";
import Header from './Common/Header/Header';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login/Login";
import MyCarosole from "./Components/MyCarosole/MyCarosole";
import NotFound from "./Components/NotFound/NotFound";
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
      <MyCarosole></MyCarosole>
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
        <PrivateRoute path='/service/:serviceId'>
          <ServiceDetail></ServiceDetail>
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
