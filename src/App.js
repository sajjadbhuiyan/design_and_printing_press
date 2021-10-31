import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './common/Footer/Footer';
import Header from './common/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
       {/* <AuthProvider> */}
    <Router>
      <Header></Header>
      {/* <MyCarosole></MyCarosole> */}
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
        {/* <Route path = '/services'>
            <Serve></Serve>
        </Route> */}
        {/* <PrivateRoute path='/service/:serviceId'>
          <ServiceDetail></ServiceDetail>
        </PrivateRoute> */}
        <Route path = '/contact'>
            <Contact></Contact>
        </Route>
        {/* <Route path = '/login'>
            <Login></Login>
        </Route> */}
        {/* <Route path = '/registration'>
            <Registration></Registration>
        </Route> */}
        <Route path = '/*'>
            <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    {/* </AuthProvider> */}
    </div>
  );
}

export default App;
