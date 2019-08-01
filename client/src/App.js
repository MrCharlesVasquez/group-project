import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar.js';
import Profile from './components/profileComponents/Profile.js';
import Budget from './components/budgetComponents/Budget.js';
import Home from './components/homeComponents/Home.js';
import Auth from './components/authentication/Auth.js'
import ProtectedRoute from './shared/ProtectedRoute.js';
import { withVice } from './context/ViceProvider.js';
import "./styles/style.css"



const App = (props) =>{
    const { token, logout, signup, login, user } = props
    return(
        <div>
           
           { token && <NavBar {...props} /> }
           
            <Switch>
                {/* <Route exact path="/" component={Home}/>  */}
                <Route 
                    path="/auth" 
                    render={rProps => !token ?
                            <Auth {...rProps}/>
                            :
                            <Redirect to="/"/>}
                    />
                <ProtectedRoute
                    token={token}
                    exact path="/"
                    component={Home}
                    redirectTo="/auth"
                    user={user}
                />
                <ProtectedRoute
                    token={token}
                    path="/Profile"
                    component={Profile}
                    redirectTo="/auth"
                    user={user}
                />
                <ProtectedRoute
                    token={token}
                    path="/Budget"
                    component={Budget}
                    redirectTo="/auth"
                    user={user}
                />
                {/* <ProtectedRoute
                    token={token}
                    path="/auth"
                    component={Auth}
                    redirectTo="/"
                    user={user}
                /> */}

                {/* <Route path="/Profile" component={Profile} />
                <Route path="/Budget" component={Budget} /> */}
            </Switch>

            
        </div>
    )
}

export default withVice(App)