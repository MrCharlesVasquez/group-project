import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/profileComponents/Profile.js';
import Budget from './components/budgetComponents/Budget.js';
import Home from './components/homeComponents/Home.js';


const App = () =>{
    return(
        <div>
           
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/Profile" component={Profile} />
                <Route path="/Budget" component={Budget} />
            </Switch>

            
        </div>
    )
}

export default App