import React from 'react'

const AuthForm = props => {
    const { handleSubmit, handleChange, username, password, btnText, toggleText, toggle, errMsg } = props
    return(
        <form className="login-form" onSubmit={handleSubmit}>
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
                type="text"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button className="login-button">{btnText}</button>
            <button className="login-toggle" onClick={toggle}>{toggleText}</button>
            <p className="err-display" style={{ color: "red" }}>{errMsg}</p>
        </form>
    )
}

export default AuthForm