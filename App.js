import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Cover from './components/Cover/Cover';
import Grid from './components/Grid/Grid';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';

import Series from './components/Series/Series';
import Animations from './components/Animations/Animations';
import Movies from './components/Movies/Movies';
import MarvelDC from './components/MarvelDC/MarvelDC';
import Games from './components/Games/Games';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';



class App extends Component{
  constructor(){
    super();
    this.state = {
      route: 'signin' , 
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: ''
      }
      
    }
  }

 loadUser = (data) =>{
   this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    password: data.password,
    entries: data.entries,
    joined: data.joined
   }    })
 }

 componentDidMount(){
    fetch('http://localhost:3000/')
     .then(response => response.json())
     .then(console.log)
  }


  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


      render(){
            return (
              <Router>
                  <div className="App">
                    <Nav isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                    { this.state.route === 'home'
                      ?<div>
                            <Switch>
                                <Route path ='/' exact component={Cover} />
                                <Route path ='/home' exact component={Cover} />
                                <Route path ='/categories' exact component={Grid} />
                                <Route path ='/signin' exact component={SignIn} />
                                <Route path ='/register' exact component={Register} />

                                <Route path ='/categories/series' exact component={Series} />
                                <Route path ='/categories/animations' exact component={Animations} />
                                <Route path ='/categories/movies' exact component={Movies} />
                                <Route path ='/categories/marveldc' exact component={MarvelDC} />
                                <Route path ='/categories/games' exact component={Games} />

                            </Switch>
                            <Footer />
                        </div>

                      :( 
                        this.state.route === 'signin'
                        ?<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                        :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                      )
                    } 

                  </div>
              </Router>
            );
      
        }
}


    
export default App;
