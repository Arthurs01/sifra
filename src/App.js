import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import './App.css';
import Contacto from "./Contacto";
import Header from './Header';
import Inicio from "./Inicio";
import Servicios from "./Servicios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";





function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
         <Switch>
          <Route exact path="/" component={Inicio}></Route>
          <Route path="/servicios" component={Servicios}></Route>
          <Route path="/contacto" component={Contacto}></Route>
         </Switch>
         <Footer/>
      </Router>
    </div>
  );
}


export default App;
