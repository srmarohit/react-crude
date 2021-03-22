import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavBar from './layout/NavBar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';

function App() {
    return (
        <div className="container">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/users/add" component={AddUser} />
                    <Route path="/users/edit/:id" component={EditUser} />
                    <Route path="/users/:id" component={ViewUser} />
                    <Route component={NotFound} />
                 </Switch>
            </Router>
          </div>
      );
}

export default App;
