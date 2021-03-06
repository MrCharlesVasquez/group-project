import React from 'react'
import Image from '../../images/VR.png'

const AuthForm = props => {
    const { handleSubmit, handleChange, username, password, btnText, toggleText, toggle, errMsg } = props
    return(
        <form className="login-form" onSubmit={handleSubmit}>
        <div className="logo" >
                <img src={Image} className="logoTag" alt="VR Logo"></img>
            </div>
            <input 
                className="username-input"
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input 
                className="password-input"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button className="login-button">{btnText}</button>
            <p className="login-toggle" onClick={toggle}>{toggleText}</p>
            <p className="err-display" style={{ color: "red" }}>{errMsg}</p>
        </form>
    )
}

export default AuthForm