import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import Navbar from '../../NavBar.js'
import { withVice } from '../../context/ViceProvider.js'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            toggle: false
        }
    }

    toggler = () => {
        this.setState(prevState => ({ toggle: !prevState.toggle }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSignupSubmit = e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(creds)
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(creds)
    }

    render(){
        return(
            <div>
                <Navbar token={this.props.token} logout={this.props.logout}/>
                { !this.state.toggle ?
                    <>
                    <AuthForm 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSignupSubmit}
                        username={this.state.username}
                        password={this.state.password}
                        btnText="Signup"
                    />
                    <button onClick={this.toggler}>Already have an account?</button>
                    </>
                  :
                    <>
                    <AuthForm 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleLoginSubmit}
                        username={this.state.username}
                        password={this.state.password}
                        btnText="Login"
                    />
                    <button onClick={this.toggler}>Don't have an account yet?</button>
                    </>
                }
            </div>
        )
    }
}

export default withVice(Auth)