import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Admin from './components/Admin';
import Footer from './components/Footer';



export class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                <div>
                    <Navbar />
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/inventory" component={Inventory} />
                    <Route exact path="/admin" component={Admin} />
                    </Switch>
                    <Footer />
                </div>
                </Router>
            </div>
        )
    }
}

export default App
